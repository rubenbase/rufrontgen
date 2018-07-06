import * as React from "react";
import { View } from "react-native";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { Icon, Button } from "antd-mobile-rn";
import { validUserSchema } from "@rufrontgen/common";
import { InputField } from "../../shared/inputField";

interface FormValues {
  email: string;
  password: string;
  name: string;
  lastname: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ width: 400, margin: "auto" }}>
        <Field name="email" placeholder="Email" component={InputField} />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={InputField}
        />
        <Field name="name" placeholder="Name" component={InputField} />
        <Field name="lastname" placeholder="Last name" component={InputField} />
        <Button type="primary" onClick={handleSubmit}>
          Register
        </Button>
        Or <a href="">Login now!</a>
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    email: "",
    password: "",
    name: "",
    lastname: ""
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
