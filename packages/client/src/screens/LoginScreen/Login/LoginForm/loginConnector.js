import * as React from "react";
import { LoginController } from "@rufrontgen/controller";
import { LoginForm } from "./ui/index";

export default class LoginConnector extends React.PureComponent {
  onFinish = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <LoginController>
        {({ submit }) => (
          <LoginForm onFinish={this.onFinish} submit={submit} {...this.props} />
        )}
      </LoginController>
    );
  }
}
