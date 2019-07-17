import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import FoodList from "../modules/Cart/FoodList";

class Order extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <FoodList
            name="Pescados"
            description="Pescados del mar"
            imageName="pescado"
          />

          <FoodList
            name="Carnes"
            description="Carne nacional"
            imageName="carne"
          />

          <FoodList
            name="Copas"
            description="Las mejores copas"
            imageName="coctel"
          />
        </View>
      </ScrollView>
    );
  }
}

export default Order;
