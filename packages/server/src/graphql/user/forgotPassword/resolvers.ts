import * as yup from "yup";
import * as bcrypt from "bcryptjs";

import { ResolverMap } from "../../../types/graphql-utils";
import { forgotPasswordLockAccount } from "../../../utils/forgotPasswordLockAccount";
import { createForgotPasswordLink } from "../../../utils/createForgotPasswordLink";
import { User } from "../../../models/User";
import {
  userNotFoundError,
  expiredKeyError
} from "../../../utils/validation/errorMessages";
import { forgotPasswordPrefix } from "../../../constants";
import { registerPasswordValidation } from "@rufrontgen/common";
import { formatYupError } from "../../../utils/validation/formatYupError";

const schema = yup.object().shape({
  newPassword: registerPasswordValidation
});

export const resolvers: ResolverMap = {
  Mutation: {
    sendForgotPasswordEmail: async (
      _,
      { email }: GQL.ISendForgotPasswordEmailOnMutationArguments,
      { redis, session }
    ) => {
      console.log(session);
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return [
          {
            path: "email",
            message: userNotFoundError
          }
        ];
      }

      await forgotPasswordLockAccount(user.id, redis);
      // @TODO: add frontend url
      await createForgotPasswordLink("", user.id, redis);
      // @TODO: send email with url

      return true;
    },
    forgotPasswordChange: async (
      _,
      { newPassword, key }: GQL.IForgotPasswordChangeOnMutationArguments,
      { redis }
    ) => {
      const userId = await redis.get(`${forgotPasswordPrefix}${key}`);
      if (!userId) {
        return [
          {
            path: "key",
            message: expiredKeyError
          }
        ];
      }

      try {
        await schema.validate({ newPassword }, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      const updatePromise = User.update(
        { id: userId },
        {
          forgotPasswordLocked: false,
          password: hashedPassword
        }
      );

      const deleteKeyPromise = redis.del(`${forgotPasswordPrefix}${key}`);

      await Promise.all([updatePromise, deleteKeyPromise]);

      return null;
    }
  }
};
