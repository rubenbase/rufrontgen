import { ResolverMap } from "../../../types/graphql-utils";
import { Categories } from "../../../models/Categories";

export const resolvers: ResolverMap = {
  Query: {
    findCategories: async () => {
      console.log("hshsihsis");
      const result = await Categories.find();
      console.log(result);
      return result;
    }
  }
};
