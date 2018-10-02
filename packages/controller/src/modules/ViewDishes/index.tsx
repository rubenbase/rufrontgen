// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ViewDishesQuery_dishes } from "../../schemaTypes";

export const viewDishesQuery = gql`
  query ViewDishesQuery($menuId: String!) {
    dishes(menuId: $menuId) {
      name,
      description,
      price,
      menuId
    }
  }
`;

export interface WithViewDishes {
  dishes: ViewDishesQuery_dishes[];
  loading: boolean;
}

export class ViewDishes extends React.PureComponent<{
  menuId: string;
  children: (data: WithViewDishes) => JSX.Element | null;
}> {
  render() {
    const { children, menuId } = this.props;
    return (
      <Query query={viewDishesQuery} variables={{ menuId }}>
        {({ data, loading, subscribeToMore }) => {
          let dishes: ViewDishesQuery_dishes[] = [];

          if (data && data.dishes) {
            dishes = data.dishes;
          }

          return children({
            dishes,
            loading
          });
        }}
      </Query>
    );
  }
}