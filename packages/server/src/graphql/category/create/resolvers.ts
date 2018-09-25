import { Category } from "./../../../models/Category";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Mutation: {
    createCategory: async (_, { input: { name } }) => {
      await Category.create({
        name
      }).save();
      return true;
    }
  }
};
