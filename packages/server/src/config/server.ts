import { userLoader } from "./../loaders/UserLoader";
import { GraphQLServer, PubSub } from "graphql-yoga";
import { redis } from "./../redis";
import { genSchema } from "../utils/genSchema";
import { applyMiddleware } from "graphql-middleware";
import { middleware } from "../middlewares/middleware";
// import { middlewareShield } from "../middlewares/shield";

// Iterates over folders and build the executable schemas

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

const pubsub = new PubSub();

const server = new GraphQLServer({
  schema,
  context: ({ request, response }) => ({
    redis,
    // P22 uncomment this when going to production url: request.protocol + "://" + request.get("host"),
    url: request ? request.protocol + "://" + request.get("host") : "",
    session: request ? request.session : undefined,
    req: request,
    res: response,
    userLoader: userLoader(),
    pubsub
  })
});

module.exports.server = server;
module.exports.redis = redis;
