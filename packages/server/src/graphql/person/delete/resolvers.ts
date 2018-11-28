import { ResolverMap } from "../../../types/graphql-utils";
import { Person } from "../../../models/Person";

export const resolvers: ResolverMap = {
    
    Mutation: {
        
        deletePerson: async(_, { id }, { session }) => {

            if (!session.userId) {
                // console.log(session.userId); <-- Dangerous to show information to the client
                throw new Error ("Not authenticated");
            }

            const personToDelete = await Person.findOne( { where: { id } } ); // TODO check if { id } is necessary
            
            if (!personToDelete) {
                throw new Error("Person not found");
            }

            await Person.remove(personToDelete);

            return true;
        }

    }
    
}