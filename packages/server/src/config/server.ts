import { applyMiddleware } from "graphql-middleware";
// import { GraphQLServer } from "graphql-yoga";
import { RedisPubSub } from "graphql-redis-subscriptions";
import { ApolloServer } from "apollo-server";

import { userLoader } from "./../loaders/UserLoader";
import { redis } from "./../redis";
import { genSchema } from "../utils/genSchema";
import { middleware } from "../middlewares/middleware";
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

const pubsub = new RedisPubSub();

const cors = {
  credentials: true,
  origin:
    process.env.NODE_ENV === "test"
      ? "*"
      : (process.env.FRONTEND_HOST as string) // Depends on where the front-end is
};

const server = new ApolloServer({
  schema,
  context: ({ request, response }: { request: any; response: any }) => ({
    redis,
    // P22 uncomment this when going to production url: request.protocol + "://" + request.get("host"),
    // url: request ?"http://localhost:4000",
    url: request ? "http://localhost:4000" : "",
    session: request ? request.session : undefined,
    req: request,
    res: response,
    userLoader: userLoader(),
    pubsub,
    cors
  })
});

module.exports.server = server;
module.exports.redis = redis;
