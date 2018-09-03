// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  CreateMessageMutation,
  CreateMessageMutationVariables
} from "../../schemaTypes";

export const createMessageMutation = gql`
  mutation CreateMessageMutation($message: MessageInput!) {
    createMessage(message: $message)
  }
`;

export interface WithCreateMessage {
  createMessage: MutationFn<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >;
}

export class CreateMessage extends React.PureComponent<{
  children: (data: WithCreateMessage) => JSX.Element | null;
}> {
  render() {
    const { children } = this.props;
    return (
      <Mutation mutation={createMessageMutation}>
        {mutate => {
          return children({
            createMessage: mutate
          });
        }}
      </Mutation>
    );
  }
}
