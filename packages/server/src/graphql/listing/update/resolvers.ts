import { listingCacheKey } from "./../../../constants";
import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../models/Listing";
import { processUpload } from "../shared/processUpload";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    updateListing: async (
      _,
      { listingId, input: { picture, ...data } },
      { redis }
    ) => {
      // const pictureUrl = picture ? await processUpload(picture) : null;
      if (picture) {
        data.pictureUrl = await processUpload(picture);
      }

      const {
        raw: [newListing]
      } = await getConnection()
        .createQueryBuilder()
        .update(Listing)
        .set(data)
        .where("id = :id", { id: listingId })
        .returning("*")
        .execute();

      const listings = await redis.lrange(listingCacheKey, 0, -1);
      const idx = listings.findIndex(
        (x: any) => JSON.parse(x).id === listingId
      );
      await redis.lset(listingCacheKey, idx, JSON.stringify(newListing));
      return true;
    }
  }
};
