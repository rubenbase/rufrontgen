import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../models/Listing";

export const resolvers: ResolverMap = {
  Query: {
    findListings: async () => {
      return Listing.find();
    }
  }
};
