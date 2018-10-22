import * as React from "react";
import { ViewDishesQuery_dishes, DeleteDishMutationVariables } from "../../schemaTypes";
export declare const viewDishesQuery: any;
export declare const deleteDishMutation: any;
export interface WithViewDishes {
    dishes: ViewDishesQuery_dishes[];
    loading: boolean;
    deleteDish: any;
}
export interface WithDeleteDishProps {
    deleteDish: (variables: DeleteDishMutationVariables) => void;
}
export declare const ViewDishes: React.ComponentClass<any>;
