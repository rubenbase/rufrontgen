import * as React from "react";
import { ViewListingQuery_viewListing } from "../../schemaTypes";
export declare const viewListingQuery: any;
export interface WithViewListing {
    listing: ViewListingQuery_viewListing | null;
    loading: boolean;
}
export declare const withViewListing: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
