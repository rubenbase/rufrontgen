import { ResolverMap } from "../../../types/graphql-utils";
import { Person } from "../../../models/Person";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    
    updatePerson: async (_, { id, input: { ...data } }) => {

      await getConnection()
      .createQueryBuilder()
      .update(Person)
      .set(data)
      .where("id = :id", {id})
      .returning("*")
      .execute();
      
      return true;
    }
  }

};
