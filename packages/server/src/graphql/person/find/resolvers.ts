import { ResolverMap } from "./../../../types/graphql-utils";
import { Person } from "./../../../models/Person";

export const resolvers: ResolverMap = {

    Query: {
        
        findPersons: async() => {
            return await Person.find();
        }

    }
    
}