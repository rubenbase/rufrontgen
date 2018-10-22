// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import { ViewAllergenesQuery_allergenes, DeleteAllergeneMutationVariables, DeleteAllergeneMutation } from "../../schemaTypes";

export const viewAllergenesQuery = gql`
  query ViewAllergenesQuery($dishId: String!) {
    allergenes(dishId: $dishId) {
      id,
      name,
      description,
      dishId
    }
  }
`;

export const deleteAllergeneMutation = gql`
  mutation DeleteAllergeneMutation(
    $allergeneId: String!
  ) {
    deleteAllergene(
      id: $allergeneId
    )
  }
`;

export interface WithViewAllergenes {
  allergenes: ViewAllergenesQuery_allergenes[];
  loading: boolean;
  deleteAllergene: any;
}

export interface WithDeleteAllergeneProps {
  deleteAllergene: (variables: DeleteAllergeneMutationVariables) => void;
}

const deleteAllergene = graphql<
  any,
  DeleteAllergeneMutation,
  DeleteAllergeneMutationVariables,
  WithDeleteAllergeneProps
>(deleteAllergeneMutation, {
  props: ({ mutate }) => ({
    deleteAllergene: async variables => {
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

class ListAllergenes extends React.PureComponent<{
  dishId: string;
  children: (data: WithViewAllergenes) => JSX.Element | null;
  deleteAllergene:any
}> {
  render() {
    const { children, dishId } = this.props;
    return (
      <Query query={viewAllergenesQuery} variables={{ dishId }}>
        {({ data, loading }) => {
          let allergenes: ViewAllergenesQuery_allergenes[] = [];
          console.log(data);
          if (data && data.allergenes) {
            
            allergenes = data.allergenes;
          }

          return children({
            allergenes,
            loading,
            deleteAllergene: this.props.deleteAllergene
          });
        }}
      </Query>
    );
  }
}

export const ViewAllergenes = deleteAllergene(ListAllergenes);