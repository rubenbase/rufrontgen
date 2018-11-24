import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  ListItem
} from "react-native";
const { height, width } = Dimensions.get("window");

export default class Pub extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Order")}>
        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            {this.props.name}
          </Text>
          <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#dddddd"
              }}
              source={require("../../../assets/tavernier.jpg")}
            />
            <Text style={{ fontWeight: "100", marginTop: 10 }}>
              {this.props.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
