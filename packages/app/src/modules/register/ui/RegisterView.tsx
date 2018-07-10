import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "@rufrontgen/common";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { InputField } from "../../shared/InputField";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View
        style={{
          padding: 20,
          flex: 1,
          display: "flex",
          backgroundColor: "blue",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 30, marginBottom: 100 }}>
          Register
        </Text>
        <Field
          name="email"
          placeholder="Email"
          component={InputField}
          containerStyle={{ width: "100%" }}
          autoCapitalize="none"
        />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          component={InputField}
          containerStyle={{ width: "100%" }}
        />
        <Field
          name="name"
          placeholder="Name"
          component={InputField}
          containerStyle={{ width: "100%" }}
        />
        <Field
          name="lastname"
          placeholder="Lastname"
          component={InputField}
          containerStyle={{ width: "100%" }}
        />
        <Button
          style={{ padding: 30 }}
          title="Submit"
          onPress={handleSubmit as any}
        />
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
