import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class WorkingOrderBox extends Component {
  render() {
    return (
      <View style={{ height: 30, width: 110, marginLeft: 20 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#2ECC71",
            paddingLeft: 10,
            paddingTop: 5
          }}
        >
          <Text>{this.props.date}</Text>
        </View>
      </View>
    );
  }
}

export default WorkingOrderBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
