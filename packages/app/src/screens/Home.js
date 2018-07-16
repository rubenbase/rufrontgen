import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import WorkingOrderBox from "../modules/Home/WorkingOrderBox";
import SpaceBox from "../modules/Home/SpaceBox";

const { height, width } = Dimensions.get("window");

class Home extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  createTable = () => {
    let values = [];
    for (let i = 0; i < 100; i++) {
      values.push(<SpaceBox name={100 + i} width={width} />);
    }

    return values;
  };

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
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS === "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try Something"
                placeholderTextColor="grey"
                style={{ flex: 1, backgroundColor: "white", fontWeight: "700" }}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Section title
              </Text>
              <View
                style={{
                  height: 30,
                  marginTop: 20
                }}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <WorkingOrderBox date={"1"} />
                  <WorkingOrderBox date={"2"} />
                  <WorkingOrderBox date={"3"} />
                  <WorkingOrderBox date={"4"} />
                  <WorkingOrderBox date={"5"} />
                  <WorkingOrderBox date={"6"} />
                </ScrollView>
              </View>
            </View>

            <View style={{ marginTop: 40 }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                {this.createTable()}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
