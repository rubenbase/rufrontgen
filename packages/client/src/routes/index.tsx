import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LegalConnector } from "../modules/legal/LegalConnector";
import { LoginConnector } from "../modules/login/LoginConnector";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/legal" component={LegalConnector} />
      <Route exact={true} path="/login" component={LoginConnector} />
    </Switch>
  </BrowserRouter>
);
