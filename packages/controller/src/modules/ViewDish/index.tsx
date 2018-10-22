// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ViewDishQuery_viewDish } from "../../schemaTypes";

export const viewDishQuery = gql`
  query ViewDishQuery($id: String!) {
    viewDish(id: $id) {
      id
      name
      description
    }
  }
`;

export interface WithViewDish {
  dish: ViewDishQuery_viewDish | null;
  loading: boolean;
}

export class ViewDish extends React.PureComponent<{
  dishId: string;
  children: (data: WithViewDish) => JSX.Element | null;
}> {
  render() {
    const { children, dishId } = this.props;
    console.log('dishId',dishId);
    return (
      <Query query={viewDishQuery} variables={{ id: dishId }}>
        {({ data, loading }) => {
          let dish: ViewDishQuery_viewDish | null = null;

          console.log(JSON.stringify(data));
          if (data && data.viewDish) {
            console.log(JSON.stringify(data));
            dish = data.viewDish;
          }

          return children({
            dish,
            loading
          });
        }}
      </Query>
    );
  }
}