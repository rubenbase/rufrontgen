import * as React from "react";
import { UpdateAllergeneMutationVariables } from "../../schemaTypes";
export declare const updateAllergeneMutation: any;
export interface WithUpdateAllergeneProps {
    updateAllergene: (variables: UpdateAllergeneMutationVariables) => void;
}
export declare const withUpdateAllergene: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
