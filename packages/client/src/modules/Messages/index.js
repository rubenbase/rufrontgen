import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ViewMessages } from "@rufrontgen/controller";
import Chat from "./../MainComponents/Chat";

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

              <div className="card">
                <div className="card-header">
                  <div className="utils__title">
                    <strong>Chat</strong>
                  </div>
                  <div className="utils__titleDescription">
                    Block with important Chat information
                  </div>
                </div>
                <div className="card-body">
                  <Chat />
                </div>
              </div>
            </div>
          );
        }}
      </ViewMessages>
    );
  }
}
