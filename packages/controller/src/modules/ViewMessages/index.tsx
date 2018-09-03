// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ViewMessagesQuery_messages } from "../../schemaTypes";

export const viewMessagesQuery = gql`
  query ViewMessagesQuery($listingId: String!) {
    messages(listingId: $listingId) {
      text
      user {
        id
        email
      }
      listingId
    }
  }
`;

export interface WithViewMessages {
  messages: ViewMessagesQuery_messages[];
  loading: boolean;
}

export class ViewMessages extends React.PureComponent<{
  listingId: string;
  children: (data: WithViewMessages) => JSX.Element | null;
}> {
  render() {
    const { children, listingId } = this.props;
    return (
      <Query query={viewMessagesQuery} variables={{ listingId }}>
        {({ data, loading }) => {
          let messages: ViewMessagesQuery_messages[] = [];

          if (data && data.messages) {
            messages = data.messages;
          }

          return children({
            messages,
            loading
          });
        }}
      </Query>
    );
  }
}
