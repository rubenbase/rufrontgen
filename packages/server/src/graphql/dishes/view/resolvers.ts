import { ResolverMap } from "../../../types/graphql-utils";
import { Dish } from "../../../models/Dish";

export const resolvers: ResolverMap = {
  Query: {
    viewDish: async (_, { id }) => {
      return Dish.findOne({ where: { id } });
    }
  }
};
