import * as React from "react";
import { RegisterController } from "@rufrontgen/controller";
import { RegisterForm } from "./ui/";

export default class RegisterConnector extends React.PureComponent {
  onFinish = () => {
    this.props.history.push("/m/confirm-email", {
      message: "Please, check your email to confirm your account."
    });
  };

  render() {
    return (
      <RegisterController>
        {({ submit }) => (
          <RegisterForm
            onFinish={this.onFinish}
            submit={submit}
            {...this.props}
          />
        )}
      </RegisterController>
    );
  }
}
