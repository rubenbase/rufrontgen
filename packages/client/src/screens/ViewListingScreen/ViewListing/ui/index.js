import * as React from "react";
import { withViewListing, WithViewListing } from "@rufrontgen/controller";

class C extends React.PureComponent {
  render() {
    const { children, loading, listing } = this.props;
    return children({ loading, listing });
  }
}

export const ViewWrapper = withViewListing(C);
