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
    return (
      //   <Page {...props}>
      <div>
        <Helmet title="Change Password" />
        <ChangePassword {...this.props} />
      </div>
      //   </Page>
    );
  }
}

export default ChangePasswordScreen;
