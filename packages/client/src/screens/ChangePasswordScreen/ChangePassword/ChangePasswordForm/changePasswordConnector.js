import * as React from "react";
import { ChangePasswordController } from "@rufrontgen/controller";

import { ChangePasswordView } from "./ui/changePasswordView";
export default class ChangePasswordConnector extends React.PureComponent {
  onFinish = () => {
    this.props.history.push("/login");
  };

  render() {
    const {
      match: {
        params: { key }
      }
    } = this.props;
    return (
      <ChangePasswordController>
        {({ submit }) => (
          <ChangePasswordView
            onFinish={this.onFinish}
            submit={async ({ newPassword }) =>
              submit({
                key,
                newPassword
              })
            }
          />
        )}
      </ChangePasswordController>
    );
  }
}
