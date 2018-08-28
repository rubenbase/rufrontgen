import { ResolverMap } from "../../../types/graphql-utils";
import { Message } from "./../../../models/Message";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { message }, { session }) => {
      await Message.create({
        ...message,
        userId: session.userId
      }).save();

      return true;
    }
  }
};
