// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  CreateDishMutationVariables,
  CreateDishMutation
} from "../../schemaTypes";

export const createDishMutation = gql`
mutation CreateDishMutation(  $name: String!
  $description: String!
  $price: Int!
  $MenuId: String!) {
  createDish( input: {
    name: $name,
    description: $description, 
    price: $price,
    menuId: $MenuId
  }
  )
}
`;

export interface WithCreateDishProps {
  createDish: (variables: CreateDishMutationVariables) => void;
}

export const withCreateDish = graphql<
  any,
  CreateDishMutation,
  CreateDishMutationVariables,
  WithCreateDishProps
>(createDishMutation, {
  props: ({ mutate }) => ({
    createDish: async variables => {
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