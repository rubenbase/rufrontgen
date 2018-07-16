import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class SpaceBox extends Component {
  render() {
    return (
      <View
        style={{
          marginBottom: 10,
          width: this.props.width / 2 - 30,
          height: 50,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {this.props.name}
          </Text>
          <Text style={{ fontSize: 10, color: "#b63838" }}>hoa </Text>
          <Text style={{ fontSize: 10 }}>43$</Text>
        </View>
      </View>
    );
  }
}
export default SpaceBox;
