import React, { Component } from "react";
import List from "./ListComponent";
import { View } from "react-native";
import { PLAYERS } from "../shared/players";
import Playerdetail from "./PlayerDetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: PLAYERS,
      selectedPlayer: null
    };
  }
  onPlayerSelect(playerId) {
    this.setState({ selectedPlayer: playerId });
  }

  render() {
    return (
      <View>
        <List
          players={this.state.players}
          onPress={playerId => this.onPlayerSelect(playerId)}
        />
        <Playerdetail
          player={
            this.state.players.filter(
              player => player.id === this.state.selectedPlayer
            )[0]
          }
        />
      </View>
    );
  }
}

export default Main;
