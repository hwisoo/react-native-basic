import React, { Component } from "react";
import List from "./ListComponent";
import { View, Platform } from "react-native";
import { PLAYERS } from "../shared/players";
import Playerdetail from "./PlayerDetailComponent";
import { createStackNavigator } from "react-navigation";

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

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <ListNavigator />
      </View>
    );
  }
}

export default Main;
