// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  CreateMenuMutationVariables,
  CreateMenuMutation
} from "../../schemaTypes";

export const createMenuMutation = gql`
  mutation CreateMenuMutation(
    $name: String!
  ) {
    createMenu(
      input: {
        name: $name
      }
    )
  }
`;

export interface WithCreateListingProps {
  createMenu: (variables: CreateMenuMutationVariables) => void;
}

export const withCreateMenu = graphql<
  any,
  CreateMenuMutation,
  CreateMenuMutationVariables,
  WithCreateListingProps
>(createMenuMutation, {
  props: ({ mutate }) => ({
    createMenu: async variables => {
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

