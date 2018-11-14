import * as React from "react";
import { MutationFn } from "react-apollo";
import { UpdateListingMutation, UpdateListingMutationVariables } from "../../schemaTypes";
export declare const updateListingMutation: any;
export interface WithUpdateListing {
    updateListing: MutationFn<UpdateListingMutation, UpdateListingMutationVariables>;
}
export declare class UpdateListing extends React.PureComponent<{
    children: (data: WithUpdateListing) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
