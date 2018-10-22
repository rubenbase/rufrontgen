import { ResolverMap } from "../../../types/graphql-utils";
import { Allergene } from "../../../models/Allergene";

export const resolvers: ResolverMap = {
  Mutation: {
    createAllergene: async (_, { input: { ...data } }, {session}) => {
      await Allergene.create({
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
