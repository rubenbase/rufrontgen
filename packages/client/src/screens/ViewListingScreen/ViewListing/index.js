import * as React from "react";
import { ViewListing } from "@rufrontgen/controller";
import { MessageConnector } from "modules/Messages";
export default class ViewListingConnector extends React.PureComponent {
  render() {
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
              <MessageConnector {...this.props} />
            </div>
          );
        }}
      </ViewListing>
    );
  }
}
