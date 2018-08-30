import { PUBSUB_NEW_MESSAGE } from "./../../../constants";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Subscription: {
    newMessage: {
      subscribe: (_, __, { pubsub }) => {
        return pubsub.asyncIterator(PUBSUB_NEW_MESSAGE);
      }
    }
  }
};
