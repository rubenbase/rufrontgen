import * as React from "react";
import { CreateMenuMutationVariables } from "../../schemaTypes";
export declare const createMenuMutation: any;
export interface WithCreateMenuProps {
    createMenu: (variables: CreateMenuMutationVariables) => void;
}
export declare const withCreateMenu: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
