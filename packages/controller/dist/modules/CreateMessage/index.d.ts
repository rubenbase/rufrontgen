import * as React from "react";
import { MutationFn } from "react-apollo";
import { CreateMessageMutation, CreateMessageMutationVariables } from "../../schemaTypes";
export declare const createMessageMutation: any;
export interface WithCreateMessage {
    createMessage: MutationFn<CreateMessageMutation, CreateMessageMutationVariables>;
}
export declare class CreateMessage extends React.PureComponent<{
    children: (data: WithCreateMessage) => JSX.Element | null;
}> {
    render(): JSX.Element;
}
