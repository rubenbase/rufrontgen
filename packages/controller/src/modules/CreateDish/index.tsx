// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  CreateDishMutationVariables,
  CreateDishMutation
} from "../../schemaTypes";

export const createDishMutation = gql`
mutation CreateDishMutation($dish: DishInput!) {
  createDish(dish: $dish)
}
`;

export interface WithCreateDishProps {
  createMenu: (variables: CreateDishMutationVariables) => void;
}

export const withCreateDish = graphql<
  any,
  CreateDishMutation,
  CreateDishMutationVariables,
  WithCreateDishProps
>(createDishMutation, {
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