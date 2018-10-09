import dotenv = require("dotenv");
import "reflect-metadata";

import { createTypeormConn } from "./utils/createTypeormConn";
import { createTestConn } from "./utils/testing/createTestConn";

export const startServer = async () => {
  // Load .env config
  const result = dotenv.config();

  if (result.error) {
    throw result.error;
  }

  // GraphQL & Redis Configuration
  const { app, redis, httpServer, apolloServer } = require("./config/server");

  // Clears redis data for testing
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  // Creates TypeORM connection
  if (process.env.NODE_ENV === "test") {
    await createTestConn(true);
  } else {
    const conn = await createTypeormConn();
    await conn.runMigrations();
  }

  // TODO: Remove this cache part in case we want to implement other cache solution
  // clear cache
  // await redis.del(listingCacheKey);
  // fill cache
  // const listings = await Listing.find();
  // const listingStrings = listings.map(x => JSON.stringify(x));
  // await redis.lpush(listingCacheKey, ...listingStrings);

  // Starts the server
  const port = process.env.NODE_ENV === "test" ? 0 : process.env.PORT || 4000;

  httpServer.listen(port, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${port}${
        apolloServer.subscriptionsPath
      }`
    );
  });

  return app;
};
