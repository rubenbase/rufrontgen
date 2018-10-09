import * as React from "react";
import { CreateCategoriesMutationVariables } from "../../../schemaTypes";
export declare const createCategoriesMutation: any;
export interface WithCreateCategoriesProps {
    createCategories: (variables: CreateCategoriesMutationVariables) => void;
}
export declare const withCreateCategories: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
