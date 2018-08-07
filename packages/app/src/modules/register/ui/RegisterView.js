import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "@rufrontgen/common";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { InputField } from "../../shared/InputField";
import { createStackNavigator } from "react-navigation";
class C extends React.PureComponent {
  dummySubmit(e) {
    console.log(e);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View>
          <View
            style={{
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
              <Text style={{ fontSize: 22 }}>¡Regístrate!</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 15,
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <ScrollView>
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                  containerStyle={{ width: "100%", marginBottom: 15 }}
                  autoCapitalize="none"
                />
                <Field
                  name="password"
                  secureTextEntry={true}
                  placeholder="contraseña"
                  component={InputField}
                  containerStyle={{ width: "100%", marginBottom: 15 }}
                />

                <Field
                  name="name"
                  placeholder="nombre"
                  component={InputField}
                  containerStyle={{ width: "100%", marginBottom: 15 }}
                />
                <Field
                  name="lastname"
                  placeholder="apellidos"
                  component={InputField}
                  containerStyle={{ width: "100%", marginBottom: 15 }}
                />
                <Button
                  style={{ padding: 35 }}
                  title="¡Regístrate!"
                  onPress={handleSubmit}
                />
                <Text
                  style={{
                    textAlign: "center",
                    justifyContent: "space-between",
                    padding: 15,
                    fontSize: 12,
                    color: "#5a7fdf",
                    fontWeight: "400"
                  }}
                  onPress={() => this.props.navigation.push("Legal")}
                >
                  Registrándote aceptas los Términos y Condicciones
                  </Text>
                <Text
                  style={{
                    textAlign: "center",
                    justifyContent: "space-between",
                    padding: 2,
                    fontSize: 12,
                    color: "#5a7fdf",
                    fontWeight: "400"
                  }}
                  onPress={() => this.props.navigation.navigate("Forgot")}
                >
                  ¿Olvidaste la contraseña?
                  </Text>
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              height: 50,
              backgroundColor: "white",
              alignItems: "flex-start",
              justifyContent: "center",
              borderTopColor: "#e8e8ec",
              borderTopWidth: 1,
              paddingHorizontal: 25
            }}
          >

          </View>
        </View>
      </View>
    );
  }
}

export const RegisterView = withFormik({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "", name: "", lastname: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
