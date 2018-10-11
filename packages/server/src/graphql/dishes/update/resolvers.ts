import { ResolverMap } from "../../../types/graphql-utils";
import { Dish } from "../../../models/Dish";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    updateDish: async (_, { dishId, input: { ...data } }) => {
      await getConnection()
        .createQueryBuilder()
        .update(Dish)
        .set(data)
        .where("id = :id", { id: dishId })
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
