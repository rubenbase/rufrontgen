import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { loginSchema } from "@rufrontgen/common";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { InputField } from "../../shared/InputField";

class C extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View
        style={{
          padding: 20,
          flex: 1,
          display: "flex",
          backgroundColor: "green",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 30, marginBottom: 80 }}>
          Entre en su cuenta
        </Text>
        <Field
          name="email"
          placeholder="Introduzca su email o usuario"
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

        <Button style={{ padding: 20 }} title="Bulea" onPress={handleSubmit} />
        <View>
          <Button
            clear={true}
            title=" ¡¡regístrate ya!! "
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </View>
    );
  }
}

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
