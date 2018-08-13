import { rule, shield } from "graphql-shield";

const isAuthenticated = rule()(async (_: any, __: any, context: any) => {
  return !!context.session.userId;
});

export const middlewareShield = shield({
  Mutation: {
    createListing: isAuthenticated,
    deleteListing: isAuthenticated
  }
});
