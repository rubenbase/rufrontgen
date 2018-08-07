import * as React from "react";
import { withFormik, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { loginSchema } from "@rufrontgen/common";
import { Link } from "react-router-dom";
import { InputField } from "../../shared/inputField";

const FormItem = FormA.Item;


class C extends React.PureComponent {
  render() {
    return (
      <div style={{ margin: 250 }}>
        <Form style={{ display: "flex" }}>
          <div style={{ width: 400, margin: "auto" }}>
            <Field
              name="email"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Email"
              component={InputField}
            />

            <Field
              name="password"
              type="password"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Password"
              component={InputField}
            />

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </FormItem>
            <FormItem>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </FormItem>
            <FormItem>
              Or <Link to="/register">Register now!</Link>
            </FormItem>
          </div>
        </Form>
      </div>
    );
  }
}

export const LoginView = withFormik({
  validationSchema: loginSchema,
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);