import React from "react";
// import Page from "containers/LayoutContainers/Page";
import Helmet from "react-helmet";
import EditListing from "./EditListing";

class EditListingScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Edit Listing" />
        <EditListing {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default EditListingScreen;
