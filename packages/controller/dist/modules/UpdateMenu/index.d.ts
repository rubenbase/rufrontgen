import * as React from "react";
import { MutationFn } from "react-apollo";
import { UpdateMenuMutation, UpdateMenuMutationVariables } from "../../schemaTypes";
export declare const updateMenuMutation: any;
export interface WithUpdateMenu {
    updateMenu: MutationFn<UpdateMenuMutation, UpdateMenuMutationVariables>;
}
export declare class UpdateMenu extends React.PureComponent<{
    children: (data: WithUpdateMenu) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
