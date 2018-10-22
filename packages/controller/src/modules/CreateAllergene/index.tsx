// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  CreateAllergeneMutationVariables,
  CreateAllergeneMutation
} from "../../schemaTypes";

export const createAllergeneMutation = gql`
mutation CreateAllergeneMutation( $name: String!
  $description: String!
  $DishId: String!) {
  createAllergene( input: {
    name: $name,
    description: $description, 
    dishId: $DishId
  }
  )
}
`;

export interface WithCreateAllergeneProps {
  createAllergene: (variables: CreateAllergeneMutationVariables) => void;
}

export const withCreateAllergene = graphql<
  any,
  CreateAllergeneMutation,
  CreateAllergeneMutationVariables,
  WithCreateAllergeneProps
>(createAllergeneMutation, {
  props: ({ mutate }) => ({
    createAllergene: async variables => {
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
