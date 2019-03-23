import React, { Component } from "react";
import List from "./ListComponent";
import { PLAYERS } from "../shared/players";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: PLAYERS
    };
  }

  render() {
    return <List players={this.state.players} />;
  }
}

export default Main;
