import { ResolverMap } from "../../../types/graphql-utils";
import { Dish } from "../../../models/Dish";

export const resolvers: ResolverMap = {
  Dish: {
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
