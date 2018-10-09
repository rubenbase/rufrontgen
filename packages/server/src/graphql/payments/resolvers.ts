import { stripe } from "./../../utils/payments/stripe";
import { User } from "./../../models/User";
import { ResolverMap } from "../../types/graphql-utils";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    createSubscription: async (_, { source }, { session }) => {
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

      if (!user) {
        throw new Error();
      }

      const customer = await stripe.customers.create({
        email: user.email,
        source,
        plan: process.env.STRIPE_PLANID
      });

      user.billing.stripeId = customer.id;
      user.billing.plan = "paid";
      await user.save();

      return user;
    }
  }
};
