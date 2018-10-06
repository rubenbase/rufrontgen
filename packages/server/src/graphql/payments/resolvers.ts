import { User } from "./../../models/User";
import { ResolverMap } from "../../types/graphql-utils";
import { getConnection } from "typeorm";
// import { Billing } from "../../models/Billing";

export const resolvers: ResolverMap = {
  Mutation: {
    createSubscription: async (_, { source }) => {
      // if (!req.session || !req.session.userId) {
      //   throw new Error("not authenticated");
      // }

      const user = await User.findOne("43a64a1b-d5d9-4373-aedd-25d3c0aba985");
      console.log("ALIBABA USER IS ->", user);
      console.log(source);

      const user2 = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .innerJoinAndSelect("user.billing", "billing")
        // .whereInIds("43a64a1b-d5d9-4373-aedd-25d3c0aba985")
        .where("user.id = :id", {
          id: "c0b4440c-c0c2-4f11-a68f-e1c26f4d09ab"
        })

        // .where("id", { id: "43a64a1b-d5d9-4373-aedd-25d3c0aba985" })
        .getOne();

      console.log("ALIBABA 22222222222222222 -> ", user2);
      // if (!user) {
      //   throw new Error();
      // }
      // console.log(source);
      // const customer = await stripe.customers.create({
      //   email: user.email,
      //   source,
      //   plan: process.env.PLAN
      // });

      // user.stripeId = customer.id;
      // user.type = "paid";
      // await user.save();

      return true;
    }
  }
};
