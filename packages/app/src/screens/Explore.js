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
import Pub from "../modules/Explore/Pub";
import Category from "../modules/Explore/Category";

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
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                ¡Bienvenido, Aitor!
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../../assets/home.jpg")}
                    name="Home"
                  />
                  <Category
                    imageUri={require("../../assets/experiences.jpg")}
                    name="Experiences"
                  />
                  <Category
                    imageUri={require("../../assets/restaurant.jpg")}
                    name="Resturant"
                  />
                </ScrollView>
              </View>
              <Pub />
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Le Tavernier
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                  Cafetería y coctelería de referencia local.
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
                    source={require("../../assets/tavernier.jpg")}
                  />
                </View>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Quai Coruña
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                  Local nocturno de copas.
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
                    source={require("../../assets/home.jpg")}
                  />
                </View>
              </View>
            </View>
            <Pub />
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>Brit</Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                Coctelería y pub de referencia
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
                  source={require("../../assets/brit.png")}
                />
              </View>
            </View>

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
