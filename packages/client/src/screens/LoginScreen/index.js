import React from "react";
import Helmet from "react-helmet";
import Login from "./Login";

class LoginScreen extends React.Component {
  static defaultProps = {
    pathName: "Login Beta",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Login Beta" />
        <Login {...props} />
      </div>
      // </Page>
    );
  }
}

export default LoginScreen;
