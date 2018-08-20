import { ResolverMap } from "../../../types/graphql-utils";
// import { userSessionIdPrefix, redisSessionPrefix } from "../../constants";
import { removeAllUserSessions } from "../../../utils/removeAllUserSessions";

export const resolvers: ResolverMap = {
  Mutation: {
    logout: async (_, __, { session, redis, res }) => {
      const { userId } = session;
      if (userId) {
        removeAllUserSessions(userId, redis);
        session.destroy(err => {
          if (err) {
            console.log(err);
          }
        });

        res.clearCookie("qid");
        return true;
      }
      return false;
    }
  }
};
