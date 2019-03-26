import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { PLAYERS } from "../shared/players";

function RenderPlayer(props) {
  const player = props.player;

  if (player != null) {
    return (
      <Card
        style={{ height: 200 }}
        featuredPlayer={player.name}
        image={require("./images/nba.jpg")}
      >
        <Text style={{ margin: 10, textAlign: "center" }}>{player.name}</Text>
      </Card>
    );
  } else {
    return <View />;
  }
}

class Playerdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: PLAYERS
    };
  }

  static navigationOptions = {
    title: "Player Details"
  };

  render() {
    const playerId = this.props.navigation.getParam("playerId", "");
    return <RenderPlayer player={this.state.players[+playerId]} />;
  }
}

export default Playerdetail;
