import * as React from "react";
import { LoginView } from "./ui/LoginView";

export class LoginConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <LoginView submit={this.dummySubmit} />;
  }
}
