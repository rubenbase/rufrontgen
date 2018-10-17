import { ResolverMap } from "../../../types/graphql-utils";
import { Menu } from "../../../models/Menu";

export const resolvers: ResolverMap = {
  Mutation: {
    createMenu: async (
      _, { input: { ...data }}, { session } 
    ) => {

      await Menu.create({
        ...data,
        userId: session.userId
      }).save();

      // TODO: We update the cache | We need to delete this in case we remove this cache implementation
     // redis.lpush(listingCacheKey, JSON.stringify(menu));

      return true;
    }
  }
};