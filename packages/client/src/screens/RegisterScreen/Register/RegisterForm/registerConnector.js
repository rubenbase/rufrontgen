import * as React from "react";
import { RegisterController } from "@rufrontgen/controller";
import { RegisterForm } from "./ui/";

export default class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterForm submit={submit} {...this.props} />}
      </RegisterController>
    );
  }
}
