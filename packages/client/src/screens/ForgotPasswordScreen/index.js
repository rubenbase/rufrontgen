import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import ForgotPassword from "./ForgotPassword";

class ForgotPasswordPage extends React.Component {
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
        <ForgotPassword />
      </div>
      //   </Page>
    );
  }
}

export default ForgotPasswordPage;
