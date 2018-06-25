import { createTestConn } from "../../../utils/testing/createTestConn";
import {
  invalidLogin,
  confirmEmailError
} from "../../../utils/validation/errorMessages";
import { User } from "../../../models/User";
import { Connection } from "typeorm";
import { TestClient } from "../../../utils/testing/TestClient";
import faker = require("faker");
faker.seed(Date.now() + 1);
const email = faker.internet.email();
const password = faker.internet.password();
const name = faker.name.firstName();
const lastname = faker.name.lastName();

let conn: Connection;
beforeAll(async () => {
  conn = await createTestConn();
});
afterAll(async () => {
  conn.close();
});

const loginExpectError = async (
  client: TestClient,
  e: string,
  p: string,
  errMsg: string
) => {
  // We login
  const response = await client.login(e, p);

  expect(response.data).toEqual({
    login: [
      {
        path: "email",
        message: errMsg
      }
    ]
  });
};

describe("login", () => {
  test("email not found send back error", async () => {
    // Create our client
    const client = new TestClient(process.env.TEST_HOST as string);

    await loginExpectError(
      client,
      faker.internet.email(),
      faker.internet.password(),
      invalidLogin
    );
  });

  test("email not confirmed", async () => {
    // Create our client
    const client = new TestClient(process.env.TEST_HOST as string);

    // We register an user.
    await client.register(email, password, name, lastname);

    // We expect an error as we didn't confirm the email.
    await loginExpectError(client, email, password, confirmEmailError);

    // We confirm the email.
    await User.update({ email }, { confirmed: true });

    // We try to login with bad password.
    await loginExpectError(
      client,
      email,
      faker.internet.password(),
      invalidLogin
    );

    // We login correctly.
    const response = await client.login(email, password);
    expect(response.data).toEqual({ login: null });
  });
});
