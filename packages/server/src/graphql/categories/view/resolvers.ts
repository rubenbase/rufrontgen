import { ResolverMap } from "../../../types/graphql-utils";
import { Categories } from "../../../models/Categories";

export const resolvers: ResolverMap = {
  Query: {
    viewCategory: async (_, { id }) => {
      return Categories.findOne({ where: { id } });
    }
  }
};
