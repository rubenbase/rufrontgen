// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { ViewDishesQuery_dishes } from "../../schemaTypes";

export const viewDishesQuery = gql`
  query ViewDishesQuery($menuId: String!) {
    dishes(menuId: $menuId) {
      id,
      name,
      description,
      price,
      menuId
    }
  }
`;

export const deleteDishMutation = gql`
  mutation DeleteDishMutation(
    $dishId: String!
  ) {
    deleteDish(
      id: $dishId
    )
  }
`;

export interface WithViewDishes {
  dishes: ViewDishesQuery_dishes[];
  loading: boolean;
}

export class DeleteDish extends React.PureComponent<{
  children: (data: any) => JSX.Element | null;
}> {
  render() {
    const { children } = this.props;
    return (
      <Mutation mutation={deleteDishMutation}>
      {mutate => {
        return children({
          deleteDish: mutate
        });
      }}
    </Mutation>
    );
  }
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