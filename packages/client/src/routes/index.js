import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LegalConnector } from "../modules/legal/LegalConnector";
import { HomeView } from "../modules/home/ui/HomeView";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/register" component={RegisterScreen} />
      <Route exact={true} path="/legal" component={LegalConnector} />
      <Route exact={true} path="/login" component={LoginScreen} />
      <Route
        exact={true}
        path="/forgot-password"
        component={ForgotPasswordScreen}
      />
      <Route exact={true} path="/" component={HomeView} />
    </Switch>
  </BrowserRouter>
);
