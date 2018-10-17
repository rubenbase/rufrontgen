import { ResolverMap } from "../../../types/graphql-utils";
import { Dish } from "../../../models/Dish";

export const resolvers: ResolverMap = {
  Dish: {
    owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    dishes: async (_, { menuId }) => {
      return Dish.find({
        where: {
          menuId
        }
      });
    }
  }
};
