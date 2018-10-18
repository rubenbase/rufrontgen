// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

import {
  FindMenusQuery_findMenus,
  FindMenusQuery,
  DeleteMenuMutation,
  DeleteMenuMutationVariables
} from "../../schemaTypes";

export const findMenusQuery = gql`
  query FindMenusQuery {
    findMenus {
      id
      name
    }
  }
`;

export const deleteMenuMutation = gql`
  mutation DeleteMenuMutation(
    $menuId: String!
  ) {
    deleteMenu(
      id: $menuId
    )
  }
`;

export interface WithFindMenus {
  menus: FindMenusQuery_findMenus[];
  loading: boolean;
}

export interface WithDeleteMenuProps {
  deleteMenu: (variables: DeleteMenuMutationVariables) => void;
}


const findMenus = graphql<
  any,
  FindMenusQuery,
  {},
  WithFindMenus
>(findMenusQuery, {
  props: ({ data }) => {
    let menus: FindMenusQuery_findMenus[] = [];

    if (data && !data.loading && data.findMenus) {
      menus = data.findMenus;
    }

    return {
      menus,
      loading: data ? data.loading : false
    };
  }
});

const deleteMenu = graphql<
  any,
  DeleteMenuMutation,
  DeleteMenuMutationVariables,
  WithDeleteMenuProps
>(deleteMenuMutation, {
  props: ({ mutate }) => ({
    deleteMenu: async variables => {
      alert(JSON.stringify(variables));
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

export const withFindMenus = compose(deleteMenu, findMenus);