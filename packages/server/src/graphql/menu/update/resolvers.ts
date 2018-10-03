import { ResolverMap } from "../../../types/graphql-utils";
import { Menu } from "../../../models/Menu";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    updateMenu: async (_, { menuId, input: { ...data } }) => {
      await getConnection()
        .createQueryBuilder()
        .update(Menu)
        .set(data)
        .where("id = :id", { id: menuId })
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
