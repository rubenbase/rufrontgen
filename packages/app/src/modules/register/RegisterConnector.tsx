import * as React from "react";

import { RegisterView } from "./ui/RegisterView";
export default class RegisterConnector extends React.Component {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <RegisterView submit={this.dummySubmit} />;
  }
}
