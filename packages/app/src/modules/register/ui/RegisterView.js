import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "@rufrontgen/common";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { InputField } from "../../shared/InputField";
import { createStackNavigator } from "react-navigation";
class C extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View
        style={{
          padding: 40,
          flex: 1,
          display: "flex",
          backgroundColor: "green",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 30, marginBottom: 100 }}>
          Registro
        </Text>
        <Field
          name="email"
          placeholder="Introduzca su email"
          component={InputField}
          containerStyle={{ width: "100%" }}
          autoCapitalize="none"
        />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Introduzca su contraseña"
          component={InputField}
          containerStyle={{ width: "100%" }}
        />
        <Field
          name="name"
          placeholder="Introduzca su nombre"
          component={InputField}
          containerStyle={{ width: "100%" }}
        />
        <Field
          name="lastname"
          placeholder="Introduzca su apellido"
          component={InputField}
          containerStyle={{ width: "100%" }}
        />

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 10,
              padding: 10,
              color: "#FFFFFF",
              fontWeight: "400"
            }}
            onPress={() => this.props.navigation.navigate("Legal")}
          >
            Registrandote aceptas los Términos y Condicciones
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "#FFFFFF",
              fontWeight: "400"
            }}
            onPress={() => this.props.navigation.navigate("Legal")}
          >
            ¿Olvidaste la contraseña?
          </Text>
        </View>
        <View>
          <Button
            style={{ padding: 30 }}
            title="Regístrate"
            onPress={handleSubmit}
          />
        </View>
        <View>
          <Button
            clear={true}
            title="o Logeate"
            onPress={() => this.props.navigation.navigate("Login")}
          />
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
