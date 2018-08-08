import * as React from "react";
import { LoginController } from "@rufrontgen/controller";
import { LoginForm } from "./ui/index";

export default class LoginConnector extends React.PureComponent {
  render() {
    return (
      <LoginController>
        {({ submit }) => (
          <LoginForm submit={submit} {...this.props} />
        )}
      </LoginController>
    );
  }
}
