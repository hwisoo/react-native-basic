import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function List(props) {
  const renderListItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        hideChevron={true}
        leftAvatar={{ source: require("./images/nba.jpg") }}
      />
    );
  };
  return (
    <FlatList
      data={props.players}
      renderItem={renderListItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default List;
