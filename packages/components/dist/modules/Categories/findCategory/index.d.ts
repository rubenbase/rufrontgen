import * as React from "react";
import { FindCategoriesQuery_findCategories } from "../../../schemaTypes";
export declare const findCategoriesQuery: any;
export interface WithFindCategories {
    categories: FindCategoriesQuery_findCategories[];
    loading: boolean;
}
export declare const withFindCategories: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
