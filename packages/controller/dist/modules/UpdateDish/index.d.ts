import * as React from "react";
import { UpdateDishMutationVariables } from "../../schemaTypes";
export declare const updateDishMutation: any;
export interface WithUpdateDishProps {
    updateDish: (variables: UpdateDishMutationVariables) => void;
}
export declare const withUpdateDish: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
