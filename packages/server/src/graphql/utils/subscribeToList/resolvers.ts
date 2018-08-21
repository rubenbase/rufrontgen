import { ResolverMap } from "../../../types/graphql-utils";
// import * as rp from "request-promise";

export const resolvers: ResolverMap = {
  Mutation: {
    subscribeToList: async (_, input, __) => {
      console.log("ALIBABA ES FROM SERVER=> ", input);

      // await Listing.create({
      //   ...data,
      //   pictureUrl,
      //   userId: session.userId
      // }).save();

      return true;
    }
  }
};
