import * as React from "react";
import { CreateDishMutationVariables } from "../../schemaTypes";
export declare const createDishMutation: any;
export interface WithCreateDishProps {
    createMenu: (variables: CreateDishMutationVariables) => void;
}
export declare const withCreateDish: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
