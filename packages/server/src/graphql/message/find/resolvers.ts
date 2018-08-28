import { ResolverMap } from "../../../types/graphql-utils";
import { Message } from "../../../models/Message";

export const resolvers: ResolverMap = {
  //   Listing: {
  //     pictureUrl: (parent, _, { url }) =>
  //       parent.pictureUrl && `${url}/images/${parent.pictureUrl}`,
  //     owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  //   },
  Query: {
    messages: async (_, { listingId }, { session }) => {
      return Message.find({
        where: {
          listingId,
          userId: session.userId
        }
      });
    }
  }
};
