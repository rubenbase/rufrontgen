import * as React from "react";
import { RegisterController } from "@rufrontgen/controller";
import { RegisterView } from "./ui/RegisterView";
export default class RegisterConnector extends React.Component {
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
