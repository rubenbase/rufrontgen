import { ResolverMap } from "../../../types/graphql-utils";
import { Allergene } from "../../../models/Allergene";

export const resolvers: ResolverMap = {
  Dish: {
    owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    allergenes: async (_, { dishId }) => {
      return Allergene.find({
        where: {
          dishId
        }
      });
    }
  }
};
