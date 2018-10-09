import * as React from "react";
import { MutationFn } from "react-apollo";
import {
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
} from "../../../schemaTypes";
export declare const updateCategoryMutation: any;
export interface WithUpdateCategory {
  updateCategory: MutationFn<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >;
}
export declare class UpdateCategory extends React.PureComponent<{
  children: (data: WithUpdateCategory) => JSX.Element | null;
}> {
  render(): JSX.Element;
}
