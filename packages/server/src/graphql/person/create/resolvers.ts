import { ResolverMap } from "./../../../types/graphql-utils";
import { Person } from "./../../../models/Person";

export const resolvers: ResolverMap = {
    Mutation: {
        createPerson: async (_, {input: {name, lastName, age} }) => {
            
            await Person.create({
                name,
                lastName,
                age
            }).save();

            return true;
        }
    }
}