import * as yup from "yup";

import { User } from "../../../models/User";
import { ResolverMap } from "../../../types/graphql-utils";
import { formatYupError } from "../../../utils/validation/formatYupError";
import { emailNotLongEnough, invalidEmail } from "../../../utils/validation/errorMessages";
import { registerPasswordValidation } from "../../../utils/validation/yupSchemas";
// import { sendEmail } from "../../utils/sendEmail";
// import { createConfirmEmailLink } from "./createConfirmEmailLink";

const schema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail),
  password: registerPasswordValidation
});

export const resolvers: ResolverMap = {

  Mutation: {
    register: async (
      _,
      args: GQL.IRegisterOnMutationArguments
      // { redis, url }
    ) => {
      try {
        await schema.validate(args, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }
      const { email, password } = args;
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
        password
      });
      await user.save();

      //  if (process.env.NODE_ENV !== "test") {
      //    await sendEmail(
      //      email,
      //      await createConfirmEmailLink(url, user.id, redis)
      //    );
      //  }

      return null;
    }
  }
};
