import { PUBSUB_NEW_MESSAGE } from "./../../../constants";
import { ResolverMap } from "../../../types/graphql-utils";
import { Dish } from "../../../models/Dish";

export const resolvers: ResolverMap = {
  Mutation: {
    createDish: async (_, { dish }, { session, pubsub }) => {
      const dbDish = await Dish.create({
        ...dish,
        userId: session.userId
      }).save();

      pubsub.publish(PUBSUB_NEW_MESSAGE, {
        newDish: dbDish
      });

      return true;
    }
  }
};
