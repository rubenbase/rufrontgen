import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import CreateListing from "./CreateListing";

class CreateListingScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Create Listing" />
        <CreateListing {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default CreateListingScreen;
