import * as React from "react";
import { ViewDishQuery_viewDish } from "../../schemaTypes";
export declare const viewDishQuery: any;
export interface WithViewDish {
    dish: ViewDishQuery_viewDish | null;
    loading: boolean;
}
export declare class ViewDish extends React.PureComponent<{
    dishId: string;
    children: (data: WithViewDish) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
