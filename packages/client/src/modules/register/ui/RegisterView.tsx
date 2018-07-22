import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { validUserSchema } from "@rufrontgen/common";
import { InputField } from "../../shared/inputField";
import { Link } from "react-router-dom";
const FormItem = FormA.Item;

interface FormValues {
  email: string;
  password: string;
  name: string;
  lastname: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props | any> {
  render() {
    return (
      <div style={{ margin: 250 }}>
        <Form style={{ display: "flex" }}>
          <div style={{ width: 400, margin: "auto" }}>
            <Field
              name="email"
              prefix={
                <Icon type="user" style={{ color: "rgba(191,63,63,.25)" }} /> as any
              }
              placeholder="Introduzca su email"
              component={InputField}
            />

            <Field
              name="password"
              type="password"
              prefix={
                <Icon type="user" style={{ color: "rgba(25,0,0,.25)" }} /> as any
              }
              placeholder="Introduzca su contraseña"
              component={InputField}
            />

            <Field
              name="name"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              }
              placeholder="Introduzca su nombre"
              component={InputField}
            />

            <Field
              name="lastname"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              }
              placeholder="Introduzca sus apellidos"
              component={InputField}
            />

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Register
              </Button>
            </FormItem>
            <FormItem>
              Or <Link to="/login">Login now!</Link>
            </FormItem>
          </div>
        </Form>
      </div>
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
