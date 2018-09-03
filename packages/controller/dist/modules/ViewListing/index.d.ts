import * as React from "react";
import { ViewListingQuery_viewListing } from "../../schemaTypes";
export declare const viewListingQuery: any;
export interface WithViewListing {
    listing: ViewListingQuery_viewListing | null;
    loading: boolean;
}
export declare class ViewListing extends React.PureComponent<{
    listingId: string;
    children: (data: WithViewListing) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
