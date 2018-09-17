import * as React from "react";
import { ViewListing } from "@rufrontgen/controller";
export class EditListingConnector extends React.PureComponent {
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

          return <div>{data.listing.name}</div>;
        }}
      </ViewListing>
    );
  }
}
