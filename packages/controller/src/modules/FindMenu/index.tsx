// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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

export interface DeleteMenuMutation {
  deleteMenu: boolean;
}

export interface DeleteMenuMutationVariables {
  menuId: string;
}



export const withFindMenus = graphql<
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
