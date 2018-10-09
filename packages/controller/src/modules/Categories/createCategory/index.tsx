//@ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  CreateCategoriesMutation,
  CreateCategoriesMutationVariables
} from "../../../schemaTypes";

export const createCategoriesMutation = gql`
  mutation CreateCategoriesMutation($name: String!) {
    createCategories(input: { name: $name })
  }
`;
export interface WithCreateCategoriesProps {
  createCategories: (variables: CreateCategoriesMutationVariables) => void;
}

export const withCreateCategories = graphql<
  any,
  CreateCategoriesMutation,
  CreateCategoriesMutationVariables,
  WithCreateCategoriesProps
>(createCategoriesMutation, {
  props: ({ mutate }) => ({
    createCategories: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables
      });
      console.log("ALIBABA JDBCHJDF",response);
    }
  })
});
