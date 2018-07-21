import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Keyboard,
  Platform
} from "react-native";
import { loginSchema } from "@rufrontgen/common";

import { withFormik, FormikErrors, FormikProps, Field } from "formik";

const SCREEN_HEIGHT = Dimensions.get("window").height;
import * as Animatable from "react-native-animatable";

class C extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();

    this.state = {
      placeholderText: "Enter your email"
    };
  }
  componentWillMount() {
    this.loginHeight = new Animated.Value(150);

    this.keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );

    this.keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );

    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardWillShow
    );

    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardWillHide
    );

    this.keyboardHeight = new Animated.Value(0);
    this.forwardArrowOpacity = new Animated.Value(0);
    this.borderBottomWidth = new Animated.Value(0);
  }

  keyboardWillShow = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }

    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: event.endCoordinates.height + 10
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 1
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: duration,
        toValue: 1
      })
    ]).start();
  };

  keyboardWillHide = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      if (event) {
        duration = event.duration;
      }
    }

    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: 0
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 0
      })
    ]).start();
  };

  increaseHeightOfLogin = () => {
    this.setState({ placeholderText: "hello@example.com" });
    Animated.timing(this.loginHeight, {
      toValue: SCREEN_HEIGHT,
      duration: 500
    }).start(() => {
      this.refs.textInputMobile.focus();
    });
  };

  decreaseHeightOfLogin = () => {
    Keyboard.dismiss();
    Animated.timing(this.loginHeight, {
      toValue: 150,
      duration: 500
    }).start();
  };
  render() {
    const headerTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [1, 0]
    });
    const marginTop = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [25, 100]
    });
    const headerBackArrowOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [0, 1]
    });
    const titleTextLeft = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [100, 25]
    });
    const titleTextBottom = this.loginHeight.interpolate({
      inputRange: [150, 400, SCREEN_HEIGHT],
      outputRange: [0, 0, 100]
    });
    const titleTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [0, 1]
    });

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: "absolute",
            height: 60,
            width: 60,
            top: 60,
            left: 25,
            zIndex: 100,
            opacity: headerBackArrowOpacity //animated
          }}
        >
          <TouchableOpacity onPress={() => this.decreaseHeightOfLogin()}>
            <Text>IC</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            height: 60,
            width: 60,
            right: 10,
            bottom: this.keyboardHeight, // animated
            opacity: this.forwardArrowOpacity, //animated
            zIndex: 100,
            backgroundColor: "#54575e",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30
          }}
        >
          <Text>Ic2</Text>
        </Animated.View>

        <ImageBackground
          source={require("../../../../assets/login_bg.jpg")}
          style={{ flex: 1 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Animatable.View
              animation="zoomIn"
              iterationCount={1}
              style={{
                backgroundColor: "white",
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 26 }}>HFAC</Text>
            </Animatable.View>
          </View>

          {/** BOTTOM HALF **/}
          <Animatable.View animation="slideInUp" iterationCount={1}>
            <Animated.View
              style={{
                height: this.loginHeight, //animated
                backgroundColor: "white"
              }}
            >
              <Animated.View
                style={{
                  opacity: headerTextOpacity, //animated
                  alignItems: "flex-start",
                  paddingHorizontal: 25,
                  marginTop: marginTop //animated
                }}
              >
                <Text style={{ fontSize: 24 }}>the best hotel systemm </Text>
              </Animated.View>

              <TouchableOpacity onPress={() => this.increaseHeightOfLogin()}>
                <Animated.View
                  style={{
                    marginTop: marginTop, //animated
                    paddingHorizontal: 25,
                    flexDirection: "row"
                  }}
                >
                  <Animated.Text
                    style={{
                      fontSize: 24,
                      color: "gray",
                      position: "absolute",
                      bottom: titleTextBottom, //animated
                      left: titleTextLeft, //animated
                      opacity: titleTextOpacity //animated
                    }}
                  >
                    Enter your mobile number
                  </Animated.Text>

                  <Image
                    source={require("../../../../assets/login_bg.jpg")}
                    style={{ height: 24, width: 24, resizeMode: "contain" }}
                  />
                  <Animated.View
                    pointerEvents="none"
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      borderBottomWidth: this.borderBottomWidth //animated
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        paddingHorizontal: 10
                      }}
                    >
                      email
                    </Text>

                    <TextInput
                      keyboardType="numeric"
                      ref="textInputMobile"
                      style={{ flex: 1, fontSize: 20 }}
                      placeholder={this.state.placeholderText}
                      underlineColorAndroid="transparent"
                    />
                  </Animated.View>
                </Animated.View>
              </TouchableOpacity>
            </Animated.View>
            <View
              style={{
                height: 70,
                backgroundColor: "white",
                alignItems: "flex-start",
                justifyContent: "center",
                borderTopColor: "#e8e8ec",
                borderTopWidth: 1,
                paddingHorizontal: 25
              }}
            >
              <Text
                style={{
                  color: "#5a7fdf",
                  fontWeight: "bold"
                }}
              >
                Or register
              </Text>
            </View>
          </Animatable.View>
        </ImageBackground>
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

export const LoginView = withFormik({
  validationSchema: loginSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
