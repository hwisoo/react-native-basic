import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { PLAYERS } from "../shared/players";

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
    fontWeight: "bold"
  }
});

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: PLAYERS
    };
  }

  static navigationOptions = {
    title: "List"
  };

  render() {
    const renderListItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          hideChevron={true}
          onPress={() => navigate("Playerdetail", { playerId: item.id })}
          leftAvatar={{ source: require("./images/nba.jpg") }}
        />
      );
    };

    const { navigate } = this.props.navigation;
    return (
      <FlatList
        style={styles.card}
        data={this.state.players}
        renderItem={renderListItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

export default List;
