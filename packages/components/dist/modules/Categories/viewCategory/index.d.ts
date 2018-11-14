import * as React from "react";
import { ViewCategoryQuery_viewCategory } from "../../../schemaTypes";
export declare const viewCategoryQuery: any;
export interface WithViewCategory {
    category: ViewCategoryQuery_viewCategory | null;
    loading: boolean;
}
export declare class ViewCategory extends React.PureComponent<{
    categoryId: string;
    children: (data: WithViewCategory) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
