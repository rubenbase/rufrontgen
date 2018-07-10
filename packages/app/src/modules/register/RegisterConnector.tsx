import * as React from "react";
import { RegisterController } from "@rufrontgen/controller";
import { RegisterView } from "./ui/RegisterView";
export default class RegisterConnector extends React.Component {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={this.dummySubmit} />}
      </RegisterController>
    );
  }
}
