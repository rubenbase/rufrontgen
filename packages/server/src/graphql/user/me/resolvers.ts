import { User } from "../../../models/User";
import { ResolverMap } from "../../../types/graphql-utils";
import { createMiddleware } from "../../../middlewares/createMiddleware";
import middleware from "./middleware";

export const resolvers: ResolverMap = {
  Query: {
    me: createMiddleware(middleware, (_, __, { session }) =>
      User.findOne({ where: { id: session.userId } })
    )
  }
};
