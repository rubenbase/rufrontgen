// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ViewMenuQuery_viewMenu } from "../../schemaTypes";

export const viewMenuQuery = gql`
  query ViewMenuQuery($id: String!) {
    viewMenu(id: $id) {
      id
      name
    }
  }
`;

export interface WithViewMenu {
  menu: ViewMenuQuery_viewMenu | null;
  loading: boolean;
}

export class ViewMenu extends React.PureComponent<{
  menuId: string;
  children: (data: WithViewMenu) => JSX.Element | null;
}> {
  render() {
    const { children, menuId } = this.props;
    return (
      <Query query={viewMenuQuery} variables={{ id: menuId }}>
        {({ data, loading }) => {
          let menu: ViewMenuQuery_viewMenu | null = null;

          if (data && data.viewMenu) {
            menu = data.viewMenu;
          }

          return children({
            menu,
            loading
          });
        }}
      </Query>
    );
  }
}
