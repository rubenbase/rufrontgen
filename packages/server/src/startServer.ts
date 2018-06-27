import dotenv = require("dotenv");
import RateLimit = require("express-rate-limit");
import RateLimitRedisStore = require("rate-limit-redis");
import "reflect-metadata";
import session = require("express-session");
import connectRedis = require("connect-redis");

import { createTypeormConn } from "./utils/createTypeormConn";
import { User } from "./models/User";
import { redisSessionPrefix } from "./constants";
import { createTestConn } from "./utils/testing/createTestConn";

const SESSION_SECRET = "sdbvsahvasv";
const RedisStore = connectRedis(session);

export const startServer = async () => {
  // Load .env config
  const result = dotenv.config();

  if (result.error) {
    throw result.error;
  }

  // GraphQL & Redis Configuration
  const { server, redis } = require("./config/server");

  // Clears redis data for testing
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
  // app.enable("trust proxy");

  // Rate Limiting
  server.express.use(
    new RateLimit({
      store: new RateLimitRedisStore({
        client: redis
      }),
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 100 requests per windowMs
      delayMs: 0 // disable delaying - full speed until the max limit is reached
    })
  );

  // Load middlewares
  server.express.use(
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
        secure: process.env.NODE_ENV === "production", // needs https on production
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    } as any)
  );

  const cors = {
    credentials: true,
    origin:
      process.env.NODE_ENV === "test"
        ? "*"
        : (process.env.FRONTEND_HOST as string) // Depends on where the front-end is
  };

  // Load express routes
  const authRoute = require("./routes/authRoutes")(User, redis);

  // Mount routes
  server.express.use("/auth", authRoute);

  // Creates TypeORM connection
  if (process.env.NODE_ENV === "test") {
    // await createTestConn(true);
    await createTestConn(true);
  } else {
    await createTypeormConn();
  }

  // Starts the server
  const app = await server.start({
    cors,
    port: process.env.NODE_ENV === "test" ? 0 : 4000
  });

  console.log("\nServer is running! Go to http://localhost:4000/docs");

  return app;
};
