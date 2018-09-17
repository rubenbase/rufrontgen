import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../models/Listing";
import { processUpload } from "../shared/processUpload";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { input: { picture, ...data } }, { session }) => {
      const pictureUrl = picture ? await processUpload(picture) : null;

      await Listing.create({
        ...data,
        pictureUrl,
        userId: session.userId
      }).save();

      return true;
    }
  }
};
