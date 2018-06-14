import v4 = require("uuid/v4");
import { Redis } from "ioredis";
import { forgotPasswordPrefix } from "../constants";

export const createForgotPasswordLink = async (
  url: string,
  userId: string,
  redis: Redis
) => {
  const id = v4();
  await redis.set(`${forgotPasswordPrefix}${id}`, userId, "ex", 60 * 20);
  return `${url}/auth/change-password/${id}`;
};
