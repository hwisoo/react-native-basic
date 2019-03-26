import React, { Component } from "react";
import List from "./ListComponent";
import Home from "./HomeComponent";
import { View, Platform } from "react-native";
import { PLAYERS } from "../shared/players";
import Playerdetail from "./PlayerDetailComponent";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

const ListNavigator = createStackNavigator(
  {
    List: { screen: List },
    Playerdetail: { screen: Playerdetail }
  },
  {
    initialRouteName: "List",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#1D428A"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);
const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#1D428A"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff"
    })
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home"
      }
    },
    List: {
      screen: ListNavigator,
      navigationOptions: {
        title: "List",
        drawerLabel: "List"
      }
    }
  },
  {
    drawerBackgroundColor: "#1D428A"
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

export default Main;
