import React from "react";
// import Page from "containers/LayoutContainers/Page";
import Helmet from "react-helmet";
import Register from "./Register";

class RegisterScreen extends React.Component {
  static defaultProps = {
    pathName: "Register",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      //   <Page {...props}>
      <div>
        <Helmet title="Register" />
        <Register {...this.props} />
      </div>
      //   </Page>
    );
  }
}

export default RegisterScreen;
