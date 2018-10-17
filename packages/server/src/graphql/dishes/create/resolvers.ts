import { ResolverMap } from "../../../types/graphql-utils";
import { Dish } from "../../../models/Dish";

export const resolvers: ResolverMap = {
  Mutation: {
    createDish: async (_, { input: { ...data } }, {session}) => {
      await Dish.create({
        ...data,
        userId: session.userId
      }).save();

    /*  pubsub.publish(PUBSUB_NEW_MESSAGE, {
        newDish: dbDish
      });*/

      return true;
    }
  }
};
