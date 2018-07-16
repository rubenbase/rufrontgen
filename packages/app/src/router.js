import React from "react";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import RegisterConnector from "./modules/register/RegisterConnector";
import LoginConnector from "./modules/login/LoginConnector";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Icon from "react-native-vector-icons/Ionicons";

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

export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search-outline" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person-outline" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

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
      initialRouteName: signedIn ? "SignedOut" : "SignedIn"
    }
  );
};
