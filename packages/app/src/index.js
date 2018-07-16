// import * as React from "react";

// // Load apollo
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";

// // Load routes
// import { createRootNavigator } from "./router";

// const SignedOut = createStackNavigator({
//   Register: {
//     screen: RegisterConnector,
//     navigationOptions: {
//       header: null
//     }
//   },
//   Login: {
//     screen: LoginConnector,
//     navigationOptions: {
//       header: null
//     }
//   }
// });

// const SignedIn = TabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarLabel: "Home"
//     }
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: "Profile"
//     }
//   }
// });

// const createRootNavigator = (signedIn = false) => {
//   return SwitchNavigator(
//     {
//       Login: {
//         screen: Login
//       },
//       Register: {
//         screen: Register
//       }
//     },
//     {
//       initialRouteName: signedIn ? "SignedIn" : "SignedOut"
//     }
//   );
// };

// export default class App extends React.Component {
//   render() {
//     return (
//       <ApolloProvider client={client}>
//         <AppStackNavigator />
//       </ApolloProvider>
//     );
//   }
// }

import React from "react";
import { createRootNavigator } from "./router";
import { isSignedIn } from "./auth";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return (
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    );
  }
}
