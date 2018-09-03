import React from "react";
import Helmet from "react-helmet";
import ViewListingConnector from "./ViewListing/index";
// import Page from "components/LayoutComponents/Page";
// import FindListings from "./FindListings";

class ViewListingScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Listing detail" />
        <ViewListingConnector {...props} />
      </div>
      // </Page>
    );
  }
}

export default ViewListingScreen;
