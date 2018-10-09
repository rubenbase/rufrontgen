// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ViewCategoryQuery_viewCategory } from "../../../schemaTypes";

export const viewCategoryQuery = gql`
  query ViewCategoryQuery($id: String!) {
    viewCategory(id: $id) {
      id
      name
    }
  }
`;

export interface WithViewCategory {
  category: ViewCategoryQuery_viewCategory | null;
  loading: boolean;
}

export class ViewCategory extends React.PureComponent<{
  categoryId: string;
  children: (data: WithViewCategory) => JSX.Element | null;
}> {
  render() {
    const { children, categoryId } = this.props;
    return (
      <Query query={viewCategoryQuery} variables={{ id: categoryId }}>
        {({ data, loading }) => {
          let category: ViewCategoryQuery_viewCategory | null = null;

          return children({
            category,
            loading
          });
        }}
      </Query>
    );
  }
}
