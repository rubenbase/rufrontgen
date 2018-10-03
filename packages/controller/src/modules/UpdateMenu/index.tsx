// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  UpdateMenuMutation,
  UpdateMenuMutationVariables
} from "../../schemaTypes";

export const updateMenuMutation = gql`
  mutation UpdateMenuMutation(
    $menuId: String!
    $input: UpdateMenuInput!
  ) {
    updateMenu(menuId: $menuId, input: $input)
  }
`;

export interface WithUpdateMenu {
  updateMenu: MutationFn<
    UpdateMenuMutation,
    UpdateMenuMutationVariables
  >;
}

export class UpdateMenu extends React.PureComponent<{
  children: (data: WithUpdateMenu) => JSX.Element | null;
}> {
  render() {
    const { children } = this.props;
    return (
      <Mutation mutation={updateMenuMutation}>
        {mutate => {
          return children({
            updateMenu: mutate
          });
        }}
      </Mutation>
    );
  }
}

