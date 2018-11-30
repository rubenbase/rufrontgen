import * as React from "react";
import CreatePersonForm from "./ui/index"

export default class PersonConnector extends React.PureComponent {

  render() {
    return (  
      <CreatePersonForm {...this.props} />
    );
  }
}
