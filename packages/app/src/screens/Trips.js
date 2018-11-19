import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import BasketContainer from "../modules/Cart/BasketComponent";
import Footer from "../modules/Cart/Footer";
import Header from "../modules/Cart/Header";
import Item from "../modules/Cart/Item";
import ItemsContainer from "../modules/Cart/ItemsContainer";
import TotalComponent from "../modules/Cart/TotalComponent";

// import { ViewMessages } from "@rufrontgen/controller";

class Trips extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ItemsContainer />
        <BasketContainer />
        <Footer />
      </View>
    );
  }
}
export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
