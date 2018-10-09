import * as React from "react";
import { Link } from "react-router-dom";
import { ViewMessages } from "@rufrontgen/controller";
import Chat from "./../MainComponents/Chat";

export class MessageConnector extends React.PureComponent {
  unsubscribe = null;

  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;
    return (
      <ViewMessages listingId={listingId}>
        {({ loading, messages, subscribe }) => {
          if (loading) {
            return <div>...loading</div>;
          }

          if (!this.unsubscribe) {
            this.unsubscribe = subscribe();
          }

          return (
            <div>
              {/* {messages.map((m, i) => (
                <div key={`${i}-lm`}>{m.text}</div>
              ))} */}
              <div>
                <Link to={`/listing/${listingId}/edit`}>edit</Link>
              </div>
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
                  <Chat
                    chats={messages}
                    username={"Ruben"}
                    listingId={listingId}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </ViewMessages>
    );
  }
}
