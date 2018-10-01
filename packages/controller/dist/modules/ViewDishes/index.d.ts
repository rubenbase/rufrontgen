import * as React from "react";
import { ViewDishesQuery_dishes } from "../../schemaTypes";
export declare const viewDishesQuery: any;
export interface WithViewDishes {
    dishes: ViewDishesQuery_dishes[];
    loading: boolean;
}
export declare class ViewDishes extends React.PureComponent<{
    listingId: string;
    children: (data: WithViewDishes) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
