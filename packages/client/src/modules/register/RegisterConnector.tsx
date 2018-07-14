import * as React from "react";
import { RegisterController } from "@rufrontgen/controller";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent<any> {
  render() {
    console.log("this proooooooooooppss are =>", this.props);
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => (
          <RegisterView submit={submit} dsds={this.props} />
        )}
      </RegisterController>
    );
  }
}
