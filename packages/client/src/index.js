import * as React from "react";
import * as ReactDOM from "react-dom";
import "setimmediate";
import { Helmet } from "react-helmet";
import Layout from "containers/LayoutContainers/Layout";

/*
 *  Apollo
 *****************/
import { ApolloProvider } from "react-apollo";

/*
 *  Service Workers
 *****************/
import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";

/*
 *  Routes
 *****************/
// import { Routes } from "./routes";

/*
 *  Resources
 *****************/
import "./resources/_antd.less"; // redefinition AntDesign variables
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap styles
import "./resources/AntStyles/AntDesign/antd.cleanui.scss";
import "./resources/CleanStyles/Core/core.cleanui.scss";
import "./resources/CleanStyles/Vendors/vendors.cleanui.scss";

/*
 *  React Intl - Internationalization
 *****************/
import {
  injectIntl,
  IntlProvider,
  addLocaleData,
  FormattedMessage
} from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_es from "react-intl/locale-data/es";
import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
let tmp_language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

console.log("ALIBABA Language is", tmp_language);

// Split locales with a region code
const language = tmp_language.toLowerCase().split(/[-_]/)[0];
console.log("ALIBABA languageWithoutRegionCode is", language);

// Try full locale, fallback to locale without region code, fallback to en
const messages = {
  es: messages_es,
  en: messages_en
};

addLocaleData([...locale_en, ...locale_es]);

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <ApolloProvider client={client}>
      <div>
        <Helmet titleTemplate="RuFrontGen" />
        <Layout />
      </div>
    </ApolloProvider>
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
