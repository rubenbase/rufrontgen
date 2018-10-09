// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
} from "../../../schemaTypes";

export const updateCategoryMutation = gql`
  mutation UpdateCategoryMutation($id: ID!, $name: String!) {
    updateCategory(id: $id, name: $name)
  }
`;

export interface WithUpdateCategory {
  updateCategory: MutationFn<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >;
}

export class UpdateCategory extends React.PureComponent<{
  children: (data: WithUpdateCategory) => JSX.Element | null;
}> {
  render() {
    const { children } = this.props;
    return (
      <Mutation mutation={updateCategoryMutation}>
        {mutate => {
          return children({
            updateCategory: mutate
          });
        }}
      </Mutation>
    );
  }
}
