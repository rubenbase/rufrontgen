import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Forgot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Forgot</Text>
      </View>
    );
  }
}
export default Forgot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
