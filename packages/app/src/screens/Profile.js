import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar
} from "react-native";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 0,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Avatar
                large
                rounded
                title="BP"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;
