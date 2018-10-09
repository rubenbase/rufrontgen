// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  FindCategoriesQuery_findCategories,
  FindCategoriesQuery
} from "../../../schemaTypes";

export const findCategoriesQuery = gql`
  query FindCategoriesQuery {
    findCategories {
      id
      name
    }
  }
`;

export interface WithFindCategories {
  categories: FindCategoriesQuery_findCategories[];
  loading: boolean;
}

export const withFindCategories = graphql<
  any,
  FindCategoriesQuery,
  {},
  WithFindCategories
>(findCategoriesQuery, {
  props: ({ data }) => {
    let categories: FindCategoriesQuery_findCategories[] = [];

    if (data && !data.loading && data.findCategories) {
      categories = data.findCategories;
    }

    return {
      categories,
      loading: data ? data.loading : false
    };
  }
});
