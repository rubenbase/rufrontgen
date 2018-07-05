import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { createStackNavigator } from "react-navigation";

// Load apollo
import { client } from "./apollo";

// Load routes
import RegisterConnector from "./modules/register/RegisterConnector";
export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppStackNavigator />
      </ApolloProvider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Register: {
    screen: RegisterConnector
  }
});
