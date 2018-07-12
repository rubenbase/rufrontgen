import * as React from "react";
import { LoginView } from "../login/ui/LoginView";
import { LoginController } from "@rufrontgen/controller";
export default class RegisterConnector extends React.Component {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  render() {
    return (
      <LoginController>
        {({ submit }: { submit: any }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
