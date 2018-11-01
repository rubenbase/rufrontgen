import { ResolverMap } from "../../../types/graphql-utils";
import { Allergene } from "../../../models/Allergene";

export const resolvers: ResolverMap = {
  Dish: {
    owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    allergenes: async (_, { dishId }, {session}) => {
      return Allergene.find({
        where: {
          dishId,
          userId: session.userId
        }
      });
    }
  }
};
