import { listingCacheKey } from "./../../../constants";
import { ResolverMap } from "../../../types/graphql-utils";
// import { Listing } from "../../../models/Listing";

export const resolvers: ResolverMap = {
  Listing: {
    pictureUrl: (parent, _, { url }) =>
      parent.pictureUrl && `${url}/images/${parent.pictureUrl}`,
    owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    findListings: async (_, __, { redis }) => {
      // TODO: maybe this cache approach is not the best if we think in multiple instances
      const listings = (await redis.lrange(listingCacheKey, 0, -1)) || [];
      return listings.map((x: any) => JSON.parse(x));
      // return Listing.find();
    }
  }
};
