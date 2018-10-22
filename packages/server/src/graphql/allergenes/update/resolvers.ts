import { ResolverMap } from "../../../types/graphql-utils";
import { Allergene } from "../../../models/Allergene";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    updateAllergene: async (_, { allergeneId, input: { ...data } }) => {
      await getConnection()
        .createQueryBuilder()
        .update(Allergene)
        .set(data)
        .where("id = :id", { id: allergeneId })
        .returning("*")
        .execute();

      // TODO: Update Caching
      // const listings = await redis.lrange(listingCacheKey, 0, -1);
      // const idx = listings.findIndex(
      //   (x: any) => JSON.parse(x).id === listingId
      // );
      // await redis.lset(listingCacheKey, idx, JSON.stringify(newListing));
      return true;
    }
  }
};
