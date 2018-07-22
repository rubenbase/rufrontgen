import * as React from "react";
import { RegisterController } from "@rufrontgen/controller";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent<any> {
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => (
          <RegisterView submit={submit} {...this.props} />
        )}
      </RegisterController>
    );
  }
}
