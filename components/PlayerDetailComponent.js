import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

function RenderPlayer(props) {
  const player = props.player;

  if (player != null) {
    return (
      <Card featuredPlayer={player.name} image={require("./images/nba.jpg")}>
        <Text style={{ margin: 10 }}>{player.name}</Text>
      </Card>
    );
  } else {
    return <View />;
  }
}

function Playerdetail(props) {
  return <RenderPlayer player={props.player} />;
}

export default Playerdetail;
