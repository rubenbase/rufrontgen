import { ResolverMap } from "./../../../types/graphql-utils";
import { Categories } from "../../../models/Categories";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    updateCategory: async (_, { id, name }) => {
      await getConnection()
        .createQueryBuilder()
        .update(Categories)
        .set({ name })
        .where("id =:id", { id })
        .execute();

      return true;
    }
  }
};
