import * as React from "react";
import { ChangePasswordView } from "./ui/changePasswordView";
// import { ChangePasswordController } from "@rufrontgen/controller";
export default class ChangePasswordConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { key }
      }
    } = this.props;
    return (
      // <ChangePasswordController>
      {
        /* {({ submit }) => <ChangePasswordView submit={submit} />} */
      }
      // </ChangePasswordController>
    );
  }
}
