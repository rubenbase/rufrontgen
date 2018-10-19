import { ResolverMap } from "../../../types/graphql-utils";
import { Dish } from "../../../models/Dish";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteDish: async (_, { id }, { session }) => {
      if (!session.userId) {
        throw new Error("not authenticated");
      }

      const dish = await Dish.findOne({ where: { id } });

      if (!dish) {
        throw new Error("does not exist");
      }

      if (session.userId !== dish.userId) {
        // Maybe in the future keep track of this and ban users
        console.log(
          `This user ${
            session.userId
          } is trying to delete a dish they don´t own`
        );
        throw new Error("not authorized");
      }

      await Dish.remove(dish);

      return true;
    }
  }
};
