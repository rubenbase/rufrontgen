import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { createStackNavigator } from "react-navigation";

// Load apollo
import { client } from "./apollo";

// Load routes
import RegisterConnector from "./modules/register/RegisterConnector";
import LoginConnector from "./modules/login/LoginConnector";

const AppStackNavigator = createStackNavigator({
  Register: {
    screen: RegisterConnector,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginConnector,
    navigationOptions: {
      header: null
    }
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
