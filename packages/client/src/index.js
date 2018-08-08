import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
import { Routes } from "./routes";

import "./resources/_antd.less"; // redefinition AntDesign variables
//import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap styles

import "./resources/AntStyles/AntDesign/antd.cleanui.scss";
import "./resources/CleanStyles/Core/core.cleanui.scss";
import "./resources/CleanStyles/Vendors/vendors.cleanui.scss";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
