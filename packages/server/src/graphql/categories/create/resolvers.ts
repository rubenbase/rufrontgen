import { ResolverMap } from "./../../../types/graphql-utils";
import { Categories } from "./../../../models/Categories";

export const resolvers: ResolverMap = {
  Mutation: {
    createCategories: async (_, { input: { name } }) => {
      await Categories.create({
        name
      }).save();

      return true;
    }
  }
};
