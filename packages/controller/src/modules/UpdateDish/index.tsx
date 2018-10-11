// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  UpdateDishMutationVariables,
  UpdateDishMutation
} from "../../schemaTypes"; 

export const updateDishMutation = gql`
mutation UpdateDishMutation(  $dishId: String!, $name: String!
  $description: String!
  $price: Int!) {
  updateDish( dishId: $dishId, input: {
    name: $name,
    description: $description, 
    price: $price
  }
  )
}
`;
export interface WithUpdateDishProps {
    updateDish: (variables: UpdateDishMutationVariables) => void;
}

export const withUpdateDish = graphql<
    any,
    UpdateDishMutation,
    UpdateDishMutationVariables,
    WithUpdateDishProps
  >(updateDishMutation, {
    props: ({ mutate }) => ({
      updateDish: async variables => {
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
  