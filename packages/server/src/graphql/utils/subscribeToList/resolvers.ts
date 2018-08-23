import { ResolverMap } from "../../../types/graphql-utils";
import * as rp from "request-promise";

const API_KEY = process.env.MAILCHIMP_API_KEY as string;
const LIST_ID = process.env.MAILCHIMP_LIST_ID as string;
const URL = `https://us19.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`;

export const resolvers: ResolverMap = {
  Mutation: {
    subscribeToList: async (_, { input: { email, name, lastname } }, __) => {
      const options = {
        method: "POST",
        body: {
          email_address: `${email}`,
          status: "subscribed",
          merge_fields: {
            FNAME: `${name}`,
            LNAME: `${lastname}`
          }
        },
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString(
            "base64"
          )}`
        },
        json: true
      };

      await rp.post(URL, {
        ...options
      });

      return true;
    }
  }
};
