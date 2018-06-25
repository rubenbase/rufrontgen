import v4 = require("uuid/v4");
import { Redis } from "ioredis";

// http://localhost:4000/docs
// https://my-website.com
// https://my-website.com/confirm/<id>
export const createConfirmEmailLink = async (
  url: string,
  userId: string,
  redis: Redis
) => {
  const id = v4();
  await redis.set(id, userId, "ex", 60 * 60 * 24);
  return `${url}/auth/confirm/${id}`;
};
