import * as React from "react";
import { ForgotPasswordView } from "./ui/forgotPasswordView";
import { ForgotPasswordController } from "@rufrontgen/controller";
export default class ForgotPasswordConnector extends React.PureComponent {
  render() {
    return (
      <ForgotPasswordController>
        {({ submit }) => <ForgotPasswordView submit={submit} />}
      </ForgotPasswordController>
    );
  }
}
