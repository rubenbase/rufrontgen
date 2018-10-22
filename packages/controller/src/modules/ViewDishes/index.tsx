// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import { ViewDishesQuery_dishes,DeleteDishMutationVariables,DeleteDishMutation } from "../../schemaTypes";

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
  deleteDish: any;
}

export interface WithDeleteDishProps {
  deleteDish: (variables: DeleteDishMutationVariables) => void;
}

const deleteDish = graphql<
  any,
  DeleteDishMutation,
  DeleteDishMutationVariables,
  WithDeleteDishProps
>(deleteDishMutation, {
  props: ({ mutate }) => ({
    deleteDish: async variables => {
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

class ListDishes extends React.PureComponent<{
  menuId: string;
  children: (data: WithViewDishes) => JSX.Element | null;
  deleteDish:any
}> {
  render() {
    const { children, menuId } = this.props;
    return (
      <Query query={viewDishesQuery} variables={{ menuId }}>
        {({ data, loading }) => {
          let dishes: ViewDishesQuery_dishes[] = [];

          if (data && data.dishes) {
            dishes = data.dishes;
          }

          return children({
            dishes,
            loading,
            deleteDish: this.props.deleteDish
          });
        }}
      </Query>
    );
  }
}

export const ViewDishes = deleteDish(ListDishes);