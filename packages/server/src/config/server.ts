import { User } from "./../models/User";
import { redisSessionPrefix } from "./../constants";
import { applyMiddleware } from "graphql-middleware";
import { RedisPubSub } from "graphql-redis-subscriptions";
import { ApolloServer } from "apollo-server-express";
import { ApolloEngine } from "apollo-engine";
import express = require("express");
import session = require("express-session");
import connectRedis = require("connect-redis");
import RateLimit = require("express-rate-limit");
import RateLimitRedisStore = require("rate-limit-redis");

import { userLoader } from "./../loaders/UserLoader";
import { redis } from "./../redis";
import { genSchema } from "../utils/genSchema";
import { middleware } from "../middlewares/middleware";
import cors = require("cors");
import http = require("http");
const SESSION_SECRET = "sdbvsahvasv";
const RedisStore = connectRedis(session);

// import { middlewareShield } from "../middlewares/shield";

const redisDebugMode = false;

if (redisDebugMode) {
  // Listens for erros in Redis.
  redis.on("error", error => {
    console.log("Redis connection error", error);
    // Comment to NOT exit the server if an redis error occurs.
    process.exit(1);
  });

  // Prints the error of the server exit.
  process.on("exit", () => {
    // Counts the instances of redis to see if we called more than 1
    console.log("Exiting...listener count ", redis.listenerCount("error"));
  });
}

// Creates the GraphQL server
const schema = genSchema() as any;
applyMiddleware(schema, middleware);

const pubsub = new RedisPubSub(
  process.env.NODE_ENV === "production"
    ? {
        connection: process.env.REDIS_URL as any
      }
    : {}
);

const shouldStartEngine = false;

const apolloServer = new ApolloServer({
  subscriptions: {
    path: "/"
  },
  schema,
  context: ({ req, res }: any) => ({
    redis,
    url: req ? req.protocol + "://" + req.get("host") : "",
    session: req ? req.session : undefined,
    req,
    res,
    userLoader: userLoader(),
    pubsub
  }),
  tracing: true,
  cacheControl: true,
  engine: shouldStartEngine
});

const app = express();

app.use(
  cors({
    credentials: true,
    origin:
      process.env.NODE_ENV === "test"
        ? "*"
        : (process.env.FRONTEND_HOST as string)
  })
);

app.use(
  new RateLimit({
    store: new RateLimitRedisStore({
      client: redis
    }),
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0 // disable delaying - full speed until the max limit is reached
  })
);

app.use(
  session({
    store: new RedisStore({
      client: redis as any,
      prefix: redisSessionPrefix
    }),
    name: "qid",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
  } as any)
);
// only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
// app.enable("trust proxy");

// Load express routes
const authRoute = require("../routes/authRoutes")(User, redis);

// Mount routes
app.use("/auth", authRoute);

app.use("/images", express.static("images"));

apolloServer.applyMiddleware({
  app,
  cors: false,
  path: "/"
});

const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

// Initialize engine with your API key. Alternatively,
// set the ENGINE_API_KEY environment variable when you
// run your program.
const engine = new ApolloEngine({
  apiKey: process.env.ENGINE_API_KEY
});

// Call engine.listen instead of app.listen(port)
if (shouldStartEngine) {
  engine.listen({
    port: 5000,
    expressApp: app
  });
}

module.exports.app = app;
module.exports.redis = redis;
module.exports.httpServer = httpServer;
module.exports.apolloServer = apolloServer;
