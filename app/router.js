import React from "react";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

export const SignedOutNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

export const SignedInNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  }
});

export const SignedOut = createAppContainer(SignedOutNavigator);
export const SignedIn = createAppContainer(SignedInNavigator);

export const RootNavigator = (signedIn = false) => {
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

export function createRootNavigator (signedIn) {
  return createAppContainer(RootNavigator(signedIn));
}
