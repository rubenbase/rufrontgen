import * as React from "react";
import { ViewDishesQuery_dishes } from "../../schemaTypes";
export declare const viewDishesQuery: any;
export declare const deleteDishMutation: any;
export interface WithViewDishes {
    dishes: ViewDishesQuery_dishes[];
    loading: boolean;
}
export declare class DeleteDish extends React.PureComponent<{
    children: (data: any) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
export declare class ViewDishes extends React.PureComponent<{
    menuId: string;
    children: (data: WithViewDishes) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
