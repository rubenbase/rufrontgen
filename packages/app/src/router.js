import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import RegisterConnector from "./modules/register/RegisterConnector";
import LoginConnector from "./modules/login/LoginConnector";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: RegisterConnector,
    navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: LoginConnector,
    navigationOptions: {
      header: null
    }
  }
});

export const SignedIn = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile"
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
