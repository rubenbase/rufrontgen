import * as React from "react";
import { ViewListing } from "@rufrontgen/controller";
import { MessageConnector } from "modules/Messages";
export default class ViewListingConnector extends React.PureComponent {
  render() {
    console.log("ALIBABA THIS PROPS ARE => ", this.props);
    const {
      match: {
        params: { listingId }
      }
    } = this.props;
    return (
      <ViewListing listingId={listingId}>
        {data => {
          console.log(data);

          if (!data.listing) {
            return <div>...loading</div>;
          }

          return (
            <div>
              {data.listing.name}
              <h2>Messages</h2>
              <MessageConnector {...this.props} />
            </div>
          );
        }}
      </ViewListing>
    );
  }
}
