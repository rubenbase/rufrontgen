import { GraphQLServer } from "graphql-yoga";
import Redis = require("ioredis");

import { genSchema } from "../utils/genSchema";

// Iterates over folders and build the executable schemas

const redis = new Redis();

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
const server = new GraphQLServer({
  schema: genSchema() as any,
  context: ({ request }) => ({
    redis,
    url: request.protocol + "://" + request.get("host"),
    session: request.session,
    req: request
  })
});

module.exports.server = server;
module.exports.redis = redis;
