import { ResolverMap } from "../../../types/graphql-utils";
import { Menu } from "../../../models/Menu";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteMenu: async (_, { id }, { session }) => {
      if (!session.userId) {
        throw new Error("not authenticated");
      }

      const menu = await Menu.findOne({ where: { id } });

      if (!menu) {
        throw new Error("does not exist");
      }

      if (session.userId !== menu.userId) {
        // Maybe in the future keep track of this and ban users
        console.log(
          `This user ${
            session.userId
          } is trying to delete a listing they don´t own`
        );
        throw new Error("not authorized");
      }

      await Menu.remove(menu);

      return true;
    }
  }
};
