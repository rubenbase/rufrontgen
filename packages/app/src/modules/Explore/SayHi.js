import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
const { height, width } = Dimensions.get("window");
import Category from "./Category";
export default class SayHi extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            paddingHorizontal: 20
          }}
        >
          ¡Bienvenido, Prueba!
        </Text>

        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              imageUri={require("../../../assets/home.jpg")}
              name="Home"
            />
            <Category
              imageUri={require("../../../assets/experiences.jpg")}
              name="Mapa"
            />
            <Category
              imageUri={require("../../../assets/restaurant.jpg")}
              name="Restaurantes"
            />
          </ScrollView>
        </View>
      </View>
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
