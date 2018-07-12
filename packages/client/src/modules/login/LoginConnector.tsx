import * as React from "react";
import { LoginController } from "@rufrontgen/controller";
import { LoginView } from "./ui/LoginView";

export class LoginConnector extends React.PureComponent {
  render() {
    return (
      <LoginController>
        {({ submit }: { submit: any }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
