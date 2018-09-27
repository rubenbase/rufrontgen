import * as React from "react";
import { FindMenusQuery_findMenus } from "../../schemaTypes";
export declare const findMenusQuery: any;
export interface WithFindMenus {
    menus: FindMenusQuery_findMenus[];
    loading: boolean;
}
export declare const withFindMenus: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
