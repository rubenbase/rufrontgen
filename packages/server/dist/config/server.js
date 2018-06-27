"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const redis_1 = require("./../redis");
const genSchema_1 = require("../utils/genSchema");
const redisDebugMode = false;
if (redisDebugMode) {
    redis_1.redis.on("error", error => {
        console.log("Redis connection error", error);
        process.exit(1);
    });
    process.on("exit", () => {
        console.log("Exiting...listener count ", redis_1.redis.listenerCount("error"));
    });
}
const server = new graphql_yoga_1.GraphQLServer({
    schema: genSchema_1.genSchema(),
    context: ({ request }) => ({
        redis: redis_1.redis,
        url: request.protocol + "://" + request.get("host"),
        session: request.session,
        req: request
    })
});
module.exports.server = server;
module.exports.redis = redis_1.redis;
//# sourceMappingURL=server.js.map