import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { createStackNavigator } from "react-navigation";

// Load apollo
import { client } from "./apollo";

// Load routes
import RegisterConnector from "./modules/register/RegisterConnector";

const AppStackNavigator = createStackNavigator({
  Register: {
    screen: RegisterConnector
  }
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppStackNavigator />
      </ApolloProvider>
    );
  }
}
