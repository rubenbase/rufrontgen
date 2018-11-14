import * as React from "react";
import { FindListingsQuery_findListings } from "../../schemaTypes";
export declare const findListingsQuery: any;
export interface WithFindListings {
    listings: FindListingsQuery_findListings[];
    loading: boolean;
}
export declare const withFindListings: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
