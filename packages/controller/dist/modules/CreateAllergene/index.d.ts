import * as React from "react";
import { CreateAllergeneMutationVariables } from "../../schemaTypes";
export declare const createAllergeneMutation: any;
export interface WithCreateAllergeneProps {
    createAllergene: (variables: CreateAllergeneMutationVariables) => void;
}
export declare const withCreateAllergene: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
