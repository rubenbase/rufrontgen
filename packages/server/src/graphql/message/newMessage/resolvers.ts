import { withFilter } from "graphql-yoga";
import { PUBSUB_NEW_MESSAGE } from "./../../../constants";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        (_, __, { pubsub }) => pubsub.asyncIterator(PUBSUB_NEW_MESSAGE),
        (payload, variables) => {
          return payload.newMessage.listingId === variables.listingId;
        }
      )
    }
  }
};
