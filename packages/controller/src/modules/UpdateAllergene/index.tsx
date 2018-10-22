// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  UpdateAllergeneMutationVariables,
  UpdateAllergeneMutation
} from "../../schemaTypes"; 
export const updateAllergeneMutation = gql`
mutation UpdateAllergeneMutation(  $allergeneId: String!, $name: String!
  $description: String!) {
  updateAllergene( allergeneId: $allergeneId, input: {
    name: $name,
    description: $description
  }
  )
}
`;
export interface WithUpdateAllergeneProps {
    updateAllergene: (variables: UpdateAllergeneMutationVariables) => void;
}

export const withUpdateAllergene = graphql<
    any,
    UpdateAllergeneMutation,
    UpdateAllergeneMutationVariables,
    WithUpdateAllergeneProps
  >(updateAllergeneMutation, {
    props: ({ mutate }) => ({
      updateAllergene: async variables => {
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
  