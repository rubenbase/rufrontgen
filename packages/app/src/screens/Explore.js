import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "../modules/Explore/Category";
import PubExperimental from "../modules/Explore/PubExperimental";
import SayHi from "../modules/Explore/SayHi";

const { height, width } = Dimensions.get("window");

class Explore extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 70 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: "clamp"
    });
    this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [50, 30],
      extrapolate: "clamp"
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
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
                marginHorizontal: 10,
                shadowOffset: { width: 10, height: 10 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 3,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 15 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Busca tu Bule local"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <SayHi />

            <PubExperimental
              name="LeTavernier"
              description="Cafetería y coctelería de reconocido prestigio situada en uno de los lugares más emblemáticos de La Coruña"
              navigation={this.props.navigation}
              imageName="tavernier"
            />

            <PubExperimental
              name="Quai Coruña"
              description="Pub hindie de referencia."
              navigation={this.props.navigation}
              imageName="quai"
            />

            <PubExperimental
              name="Brit"
              description="Un local que recrea con enorme fidelidad los pubs británicos de categoría, y lo hace con los sellos más prestigiosos."
              navigation={this.props.navigation}
              imageName="brit"
            />

            <PubExperimental
              name="Monty"
              description="Asociación de artistas y cafetería."
              navigation={this.props.navigation}
              imageName="monty"
            />

            {/* <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Locales a tu alrededor
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  width={width}
                  name="Resturant"
                  type="Coctelería"
                  price={10}
                  rating={5}
                />
                <Home
                  width={width}
                  name="Quai Coruña"
                  type="Bar"
                  price={82}
                  rating={3}
                />
                <Home
                  width={width}
                  name="Brit Coruña"
                  type="Pub"
                  price={82}
                  rating={4}
                />
              </View>
            </View> */}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
