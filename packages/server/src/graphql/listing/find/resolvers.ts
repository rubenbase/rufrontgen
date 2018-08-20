import { User } from "./../../../models/User";
import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../models/Listing";

export const resolvers: ResolverMap = {
  Listing: {
    pictureUrl: (parent, _, { url }) =>
      parent.pictureUrl && `${url}/images/${parent.pictureUrl}`,
    owner: ({ userId }) => User.findOne({ where: { id: userId } })
  },
  Query: {
    findListings: async () => {
      return Listing.find();
    }
  }
};
