import * as React from "react";
import { ViewWrapper } from "./ui";

export default class ViewListingConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;
    return (
      <ViewWrapper listingId={listingId}>
        {data => {
          console.log(data);

          if (!data.listing) {
            return <div>...loading</div>;
          }

          return <div>{data.listing.name}</div>;
        }}
      </ViewWrapper>
    );
  }
}
