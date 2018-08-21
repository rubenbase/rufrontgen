// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  SubscribeToListMutationVariables,
  SubscribeToListMutation
} from "../../schemaTypes";

export const subscribeToListMutation = gql`
  mutation SubscribeToListMutation(
    $email: String!
    $name: String!
    $lastname: String!
  ) {
    subscribeToList(input: { email: $email, name: $name, lastname: $lastname })
  }
`;

export interface SubscribeToListProps {
  subscribeToList: (variables: SubscribeToListMutationVariables) => void;
}

export const withSubscribeToList = graphql<
  any,
  SubscribeToListMutation,
  SubscribeToListMutationVariables,
  SubscribeToListProps
>(subscribeToListMutation, {
  props: ({ mutate }) => ({
    subscribeToList: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables
      });
      console.log(response);
    }
  })
});
