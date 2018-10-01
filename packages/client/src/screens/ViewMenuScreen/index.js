import React from "react";
import Helmet from "react-helmet";
import ViewMenuConnector from "./ViewMenu/index";
// import Page from "components/LayoutComponents/Page";
// import FindListings from "./FindListings";

class ViewMenuScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Menu detail" />
        <ViewMenuConnector {...props} />
      </div>
      // </Page>
    );
  }
}

export default ViewMenuScreen;
