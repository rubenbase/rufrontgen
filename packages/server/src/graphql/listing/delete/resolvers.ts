import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../models/Listing";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteListing: async (_, { id }, { session }) => {
      if (!session.userId) {
        throw new Error("not authenticated") ;
      }

      const listing = await Listing.findOne({ where: { id } });

      if (!listing) {
        throw new Error("does not exist");
      }

      if (session.userId !== listing.userId) {
        // Maybe in the future keep track of this and ban users
        console.log(
          `This user ${
            session.userId
          } is trying to delete a listing they don´t own`
        );
        throw new Error("not authorized");
      }

      await Listing.remove(listing);

      return true;
    }
  }
};
