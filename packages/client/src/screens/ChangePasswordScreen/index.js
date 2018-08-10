import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import ChangePassword from "./ChangePassword";

class ChangePasswordScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      //   <Page {...props}>
      <div>
        <Helmet title="Lockscreen" />
        <ChangePassword />
      </div>
      //   </Page>
    );
  }
}

export default ChangePasswordScreen;
