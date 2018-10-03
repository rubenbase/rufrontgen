import React from "react";
// import Page from "containers/LayoutContainers/Page";
import Helmet from "react-helmet";
import ForgotPassword from "./ForgotPassword";

class ForgotPasswordScreen extends React.Component {
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
        <ForgotPassword {...props} />
      </div>
      //   </Page>
    );
  }
}

export default ForgotPasswordScreen;
