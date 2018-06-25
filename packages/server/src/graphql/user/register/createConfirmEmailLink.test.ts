import { Connection } from "typeorm";
import Redis = require("ioredis");
import fetch from "node-fetch";

import { createConfirmEmailLink } from "./createConfirmEmailLink";
import { createTestConn } from "../../../utils/testing/createTestConn";
import { User } from "../../../models/User";
import faker = require("faker");
let userId: string;
const redis = new Redis();
faker.seed(Date.now() + 4);
let conn: Connection;

beforeAll(async () => {
  conn = await createTestConn();
  const user = await User.create({
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName()
  }).save();
  userId = user.id;
});

afterAll(async () => {
  conn.close();
});

test("Make sure it confirms user and clears key in redis", async () => {
  const url = await createConfirmEmailLink(
    process.env.TEST_HOST as string,
    userId,
    new Redis()
  );

  const response = await fetch(url);
  const text = await response.text();
  expect(text).toEqual("Ok");
  const user = await User.findOne({ where: { id: userId } });
  expect((user as User).confirmed).toBeTruthy();
  const chunks = url.split("/");
  const key = chunks[chunks.length - 1];
  const value = await redis.get(key);
  expect(value).toBeNull();
});
