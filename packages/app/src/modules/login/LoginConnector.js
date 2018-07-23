import * as React from "react";
import { LoginView } from "../login/ui/LoginView";
import { LoginController } from "@rufrontgen/controller";
import { SecureStore } from "expo";
import { SID_KEY } from "../shared/constants";
export default class RegisterConnector extends React.Component {
  saveSessionId = sessionId => {
    SecureStore.setItemAsync(SID_KEY, sessionId);
  };
  render() {
    return (
      <LoginController onSessionId={this.saveSessionId}>
        {({ submit }) => <LoginView submit={submit} {...this.props} />}
      </LoginController>
    );
  }
}
