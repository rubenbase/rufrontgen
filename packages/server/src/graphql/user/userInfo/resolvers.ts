import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../models/User";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Query: {
    getUser: async (_, __, { session }) => {
      if (!session.userId) {
        throw new Error("not authenticated");
      }

      const user = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .innerJoinAndSelect("user.billing", "billing")
        .where("user.id = :id", {
          id: `${session.userId}`
        })
        .getOne();

      console.log("ALIBABA user is -> ", user);

      return user;
    }
  }
};
