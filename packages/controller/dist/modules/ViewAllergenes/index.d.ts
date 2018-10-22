import * as React from "react";
import { ViewAllergenesQuery_allergenes, DeleteAllergeneMutationVariables } from "../../schemaTypes";
export declare const viewAllergenesQuery: any;
export declare const deleteAllergeneMutation: any;
export interface WithViewAllergenes {
    allergenes: ViewAllergenesQuery_allergenes[];
    loading: boolean;
    deleteAllergene: any;
}
export interface WithDeleteAllergeneProps {
    deleteAllergene: (variables: DeleteAllergeneMutationVariables) => void;
}
export declare const ViewAllergenes: React.ComponentClass<any>;
