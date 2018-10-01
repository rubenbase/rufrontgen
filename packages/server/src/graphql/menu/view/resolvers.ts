import { ResolverMap } from "../../../types/graphql-utils";
import { Menu } from "../../../models/Menu";

export const resolvers: ResolverMap = {
  Query: {
    viewMenu: async (_, { id }) => {
      return Menu.findOne({ where: { id } });
    }
  }
};
