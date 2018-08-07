import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Animated,
  Image,
  Dimensions,
  Keyboard,
  Platform
} from "react-native";
import { loginSchema } from "@rufrontgen/common";

import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { Button } from "react-native-elements";

import { InputField } from "../../shared/InputField";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class C extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../../../assets/login_bg.jpg")}
          style={{ flex: 1 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "white",
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 26 }}>NEWCO</Text>
            </View>
          </View>

          {/** BOTTOM HALF **/}
          <View>
            <View
              style={{
                height: 250,
                backgroundColor: "white"
              }}
            >
              <View
                style={{
                  alignItems: "flex-start",
                  paddingHorizontal: 25,
                  marginTop: 10,
                  marginBottom: 15
                }}
              >
                <Text style={{ fontSize: 24 }}>Enter your info</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 25,
                  marginTop: 10,
                  marginBottom: 15
                }}
              >
                <Field
                  name="email"
                  placeholder="Email"
                  component={InputField}
                  containerStyle={{ width: "100%", marginBottom: 20 }}
                  autoCapitalize="none"
                />
                <Field
                  name="password"
                  secureTextEntry={true}
                  placeholder="Password"
                  component={InputField}
                  containerStyle={{ width: "100%", marginBottom: 20 }}
                />
                <Button
                  style={{ padding: 30 }}
                  title="Submit"
                  onPress={handleSubmit}
                />
              </View>
            </View>
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
                onPress={() => this.props.navigation.push("Register")}
              >
                Or register
              </Text>
            </View>
          </View>
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
