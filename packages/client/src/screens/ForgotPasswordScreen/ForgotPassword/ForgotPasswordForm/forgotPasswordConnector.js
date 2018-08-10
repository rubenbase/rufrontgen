import * as React from "react";
import { ForgotPasswordView } from "./ui/forgotPasswordView";
import { ForgotPasswordController } from "@rufrontgen/controller";
export default class ForgotPasswordConnector extends React.PureComponent {
  onFinish = () => {
    this.props.history.push("/m/reset-password", {
      message: "Please, check your email to reset your password."
    });
  };

  render() {
    return (
      <ForgotPasswordController>
        {({ submit }) => (
          <ForgotPasswordView onFinish={this.onFinish} submit={submit} />
        )}
      </ForgotPasswordController>
    );
  }
}
