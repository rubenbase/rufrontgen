import React from "react";
import Page from "containers/LayoutContainers/Page";
import Helmet from "react-helmet";
import FindListings from "./FindListings";

class FindListingsScreen extends React.Component {
  // static defaultProps = {
  //   pathName: "Lockscreen",
  //   roles: ["agent", "administrator"]
  // };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        {/* <div> */}
        <Helmet title="Find Listings" />
        <FindListings {...this.props} />
        {/* </div> */}
      </Page>
    );
  }
}

export default FindListingsScreen;
