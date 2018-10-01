import * as React from "react";
import { ViewMenuQuery_viewMenu } from "../../schemaTypes";
export declare const viewMenuQuery: any;
export interface WithViewMenu {
    menu: ViewMenuQuery_viewMenu | null;
    loading: boolean;
}
export declare class ViewMenu extends React.PureComponent<{
    menuId: string;
    children: (data: WithViewMenu) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
