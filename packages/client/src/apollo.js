import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { split, ApolloLink } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { withClientState } from "apollo-link-state";

// Creates the cache
const cache = new InMemoryCache();

// Creates the default global state
const defaultState = {
  currentLanguage: {
    __typename: "currentLanguage",
    currentLanguage: "es"
  }
};

// Links the state
const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateLanguage: (_, { index, value }, { cache }) => {
        console.log(index, value);
      }
    }
  }
});

// Creates the http link
const httpLink = createUploadLink({
  uri: process.env.REACT_APP_SERVER_URL,
  credentials: "include"
});

// Creates a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true
  }
});

// Using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

// Mount apollo client
export const client = new ApolloClient({
  link: ApolloLink.from([stateLink, link]),
  cache
});
