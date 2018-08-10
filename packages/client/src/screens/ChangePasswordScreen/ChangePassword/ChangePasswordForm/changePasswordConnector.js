import * as React from "react";
import { ChangePasswordController } from "@rufrontgen/controller";

import { ChangePasswordView } from "./ui/changePasswordView";
export default class ChangePasswordConnector extends React.PureComponent {
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
