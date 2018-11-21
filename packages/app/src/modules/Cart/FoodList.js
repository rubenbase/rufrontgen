import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
const { height, width } = Dimensions.get("window");

const imageName = {
  carne: require("../../../assets/presa.jpg"),
  pescado: require("../../../assets/pescado.jpg"),
  coctel: require("../../../assets/copa.jpg")
};

class FoodList extends Component {
  render() {
    return (
      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>
          {this.props.name}
        </Text>
        <Text style={{ fontWeight: "100", marginTop: 10 }}>
          {this.props.description}
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
            source={imageName[this.props.imageName]}
          />
        </View>
      </View>
    );
  }
}

export default FoodList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
