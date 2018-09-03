import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ViewMessages } from "@rufrontgen/controller";

export class MessageConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;
    return (
      <ViewMessages listingId={listingId}>
        {({ loading, messages }) => {
          if (loading) {
            return <div>...loading</div>;
          }

          return (
            <div>
              {messages.map((m, i) => (
                <div key={`${i}-lm`}>{m.text}</div>
              ))}
            </div>
          );
        }}
      </ViewMessages>
    );
  }
}
