import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import FindMenus from "./FindMenus";

class FindMenusScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Find Menus" />
        <FindMenus {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default FindMenusScreen;
