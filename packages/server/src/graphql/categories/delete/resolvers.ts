import { ResolverMap } from "./../../../types/graphql-utils";
import { Categories } from "./../../../models/Categories";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteCategories: async (_, { id }, { session }) => {
      if (!session.userId) {
        console.log(session.userId);
        // throw new Error ("not authenticated");
      }

      const categories = await Categories.findOne({ where: { id } });

      if (!categories) {
        throw new Error("does not exist");
      }

      await Categories.remove(categories);

      return true;
    }
  }
};
