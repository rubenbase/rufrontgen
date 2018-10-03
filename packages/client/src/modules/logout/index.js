import * as React from "react";
import { LogoutController } from "@rufrontgen/controller";
import { RouteComponentProps, Redirect } from "react-router-dom";

import CallLogout from "./callLogout";

export default class Logout extends React.PureComponent {
  onFinish = () => {
    window.location.replace("/");

    // TODO: Check why this.props.history breaks the store
    // this.props.history.push("/");
  };

  render() {
    return (
      <LogoutController>
        {({ logout }) => (
          <CallLogout logout={logout} onFinish={this.onFinish} />
        )}
      </LogoutController>
    );
  }
}
