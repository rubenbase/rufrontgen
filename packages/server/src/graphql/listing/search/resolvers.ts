import { Listing } from "./../../../models/Listing";
import { getConnection } from "typeorm";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Query: {
    searchListings: async (
      _,
      { input: { name, category, price }, limit, offset }
    ) => {
      let listingQB = await getConnection()
        .getRepository(Listing)
        .createQueryBuilder("l"); // this is the alias, put whatever name you want
      if (name) {
        listingQB = listingQB.andWhere("l.name ilike :name ", {
          name: `%${name}`
        });
      }
      if (category) {
        listingQB = listingQB.andWhere("l.category = :category", { category });
      }

      if (price) {
        listingQB = listingQB.andWhere("l.price = :price", { price });
      }

      return listingQB
        .take(limit)
        .skip(offset)
        .getMany();
    }
  }
};
