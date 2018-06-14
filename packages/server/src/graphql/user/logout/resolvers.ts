import { ResolverMap } from "../../../types/graphql-utils";
// import { userSessionIdPrefix, redisSessionPrefix } from "../../constants";
import { removeAllUserSessions } from "../../../utils/removeAllUserSessions";

export const resolvers: ResolverMap = {

  Mutation: {
    logout: async (_, __, { session, redis }) => {
      const { userId } = session;
      if (userId) {
        removeAllUserSessions(userId, redis);
        return true;
      }
      return false;
    }
  }
};
