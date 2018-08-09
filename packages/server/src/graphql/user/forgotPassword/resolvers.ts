import { sendEmail } from "./../../../utils/sendEmail";
import * as yup from "yup";
import * as bcrypt from "bcryptjs";

import { ResolverMap } from "../../../types/graphql-utils";
import { createForgotPasswordLink } from "../../../utils/createForgotPasswordLink";
import { User } from "../../../models/User";
import { expiredKeyError } from "../../../utils/validation/errorMessages";
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
        return { ok: true };
        // return [
        //   {
        //     path: "email",
        //     message: userNotFoundError
        //   }
        // ];
      }
      // Lock the account (maybe not the best practice)
      // await forgotPasswordLockAccount(user.id, redis);

      const url = await createForgotPasswordLink(
        process.env.FRONTEND_HOST as string,
        user.id,
        redis
      );
      await sendEmail(email, url, "Reset password");
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
