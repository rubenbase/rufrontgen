import React from "react";
import Helmet from "react-helmet";
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
        <Helmet title="Find Listings" />
      </div>
      // </Page>
    );
  }
}

// export default FindListingsScreen;
