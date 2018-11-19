import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

// Screens
import RegisterConnector from "./modules/register/RegisterConnector";
import LoginConnector from "./modules/login/LoginConnector";
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import Inbox from "./screens/Inbox";
import Profile from "./screens/Profile";
import Saved from "./screens/Saved";
import Trips from "./screens/Trips";

import AuthLoadingScreen from "./screens/AuthLoading";

import Icon from "react-native-vector-icons/Ionicons";
import Legal from "./screens/Legal";
import Forgot from "./screens/Forgot";

const AuthStackNavigator = createStackNavigator({
  Register: {
    screen: RegisterConnector
  },
  Login: {
    screen: LoginConnector,
    navigationOptions: {
      header: null
    }
  },
  Legal: {
    screen: Legal
  },
  Forgot: {
    screen: Forgot
  }
});

const AppTabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "Explora",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person-outline" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Perfil",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person-outline" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person-outline" color={tintColor} size={24} />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: "Comidas",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person-outline" color={tintColor} size={24} />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "Inbox",
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
      AuthLoading: {
        screen: AuthLoadingScreen
      },
      AppTabNavigator: {
        screen: AppTabNavigator
      },
      AuthStackNavigator: {
        screen: AuthStackNavigator
      }
    },
    {
      initialRouteName: "AppTabNavigator"
    }
  );
};
