import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { height, width } = Dimensions.get("window");

const selectImage = {
  brit: require("../../../assets/brit.png"),
  tavernier: require("../../../assets/tavernier.jpg"),
  quai: require("../../../assets/home.jpg"),
  monty: require("../../../assets/monty.jpg")
};

const PubExperimental = ({ name, description, navigation, imageName }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={() => navigation.navigate("Order")}
  >
    <View style={{ marginTop: 40, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>{name}</Text>
      <View style={{ width: width - 20, height: 250, marginTop: 20 }}>
        <Image
          style={{
            flex: 1,
            height: null,
            width: null,
            resizeMode: "cover",
            borderRadius: 2,
            borderWidth: 1,
            borderColor: "#dddddd"
          }}
          source={selectImage[imageName]}
        />
        <Text
          style={{ fontWeight: "100", marginTop: 10, paddingHorizontal: 5 }}
        >
          {description}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default PubExperimental;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
