import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class WorkingOrderBox extends Component {
  render() {
    return (
      <View style={{ height: 30, width: 110, marginLeft: 20 }}>
        <Button
          title={this.props.date}
          color="#2ECC71"
          style={{
            flex: 1,
            paddingLeft: 10
          }}
        />
      </View>
    );
  }
}

export default WorkingOrderBox;
