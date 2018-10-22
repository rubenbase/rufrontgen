import { ResolverMap } from "../../../types/graphql-utils";
import { Allergene } from "../../../models/Allergene";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteAllergene: async (_, { id }, { session }) => {
      if (!session.userId) {
        throw new Error("not authenticated");
      }

      const allergene = await Allergene.findOne({ where: { id } });

      if (!allergene) {
        throw new Error("does not exist");
      }

      if (session.userId !== allergene.userId) {
        // Maybe in the future keep track of this and ban users
        console.log(
          `This user ${
            session.userId
          } is trying to delete a allergene they don´t own`
        );
        throw new Error("not authorized");
      }

      await Allergene.remove(allergene);

      return true;
    }
  }
};
