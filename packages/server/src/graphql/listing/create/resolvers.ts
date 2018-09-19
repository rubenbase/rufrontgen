import { listingCacheKey } from "./../../../constants";
import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../models/Listing";
import { processUpload } from "../shared/processUpload";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (
      _,
      { input: { picture, ...data } },
      { session, redis }
    ) => {
      const pictureUrl = picture ? await processUpload(picture) : null;

      const listing = await Listing.create({
        ...data,
        pictureUrl,
        userId: session.userId
      }).save();

      // TODO: We update the cache | We need to delete this in case we remove this cache implementation
      redis.lpush(listingCacheKey, JSON.stringify(listing));

      return true;
    }
  }
};
