import React from "react";
import Helmet from "react-helmet";
import Login from "./Login";
import Page from "containers/LayoutContainers/Page";

class LoginScreen extends React.Component {
  static defaultProps = {
    pathName: "Login Beta",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Login Beta" />
        <Login {...props} />
      </Page>
    );
  }
}

export default LoginScreen;
