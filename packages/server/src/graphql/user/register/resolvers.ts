import { validUserSchema } from "@rufrontgen/common";

import { User } from "../../../models/User";
import { ResolverMap } from "../../../types/graphql-utils";
import { formatYupError } from "../../../utils/validation/formatYupError";
import { sendEmail } from "../../../utils/sendEmail";
import { createConfirmEmailLink } from "./createConfirmEmailLink";

export const resolvers: ResolverMap = {
  Mutation: {
    register: async (
      _,
      args: GQL.IRegisterOnMutationArguments,
      { redis, url }
    ) => {
      console.log(args);
      try {
        await validUserSchema.validate(args, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }

      const { email, password, name, lastname } = args;
      const userAlreadyExists = await User.findOne({
        where: { email },
        select: ["id"]
      });
      if (userAlreadyExists) {
        return [
          {
            path: "email",
            message: "already taken"
          }
        ];
      }
      const user = User.create({
        email,
        password,
        confirmed: true, // TODO: remove in prod
        name,
        lastname
      });
      await user.save();

      if (process.env.NODE_ENV !== "test") {
        await sendEmail(
          email,
          await createConfirmEmailLink(url, user.id, redis),
          "Confirm email"
        );
      }

      return null;
    }
  }
};
