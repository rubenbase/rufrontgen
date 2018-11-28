import { ResolverMap } from "../../../types/graphql-utils";
import { Person } from "../../../models/Person";

export const resolvers: ResolverMap = {
  
  Query: {
  
    viewPerson: async (_, { id }) => {
      return Person.findOne({ where: { id } });
    }

  }

};
 