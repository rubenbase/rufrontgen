import fetch from "node-fetch";

test("Sends invalid back if a bad ID is sent", async () => {
  const response = await fetch(`${process.env.TEST_HOST}/auth/confirm/12345`);
  const text = await response.text();
  expect(text).toEqual("Invalid");
});
