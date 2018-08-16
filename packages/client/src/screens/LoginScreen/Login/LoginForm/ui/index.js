import * as React from "react";
import { withFormik, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { loginSchema } from "@rufrontgen/common";
import { Link } from "react-router-dom";
import { InputField } from "modules/shared/inputField";

const FormItem = FormA.Item;

class C extends React.PureComponent {
  render() {
    return (
      <div className="cat__pages__login__block__form">
        <h4 className="text-uppercase">
          <strong>Inicia sesión</strong>
        </h4>
        <br />

        <Form style={{ display: "flex" }}>
          <div style={{ width: 400, margin: "auto" }}>
            <Field
              name="email"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              component={InputField}
            />

            <Field
              name="password"
              type="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Password"
              component={InputField}
            />

            <div className="mb-2">
              <Link
                to="/forgot-password"
                className="utils__link--blue utils__link--underlined"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <div className="form-actions">
              <Button
                type="primary"
                htmlType="submit"
                className="width-150 mr-4"
              >
                Inicia sesión
              </Button>

              <Link to="/register">
                <Button className="width-100" htmlType="button">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export const LoginForm = withFormik({
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
    } else {
      props.onFinish();
    }
  }
})(C);
