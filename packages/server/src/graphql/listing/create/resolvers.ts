import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../models/Listing";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { input }, { session }) => {
      console.log(session);
      await Listing.create({
        ...input,
        pictureUrl: "",
        userId: session.userId
      }).save();

      return true;
    }
  }
};
