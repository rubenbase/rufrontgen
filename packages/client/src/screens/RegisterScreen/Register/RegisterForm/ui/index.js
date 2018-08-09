import * as React from "react";
import { withFormik, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { validUserSchema } from "@rufrontgen/common";
import { InputField } from "modules/shared/inputField";
import { Link } from "react-router-dom";

const FormItem = FormA.Item;

class C extends React.PureComponent {
  render() {
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="email"
            prefix={
              <Icon type="user" style={{ color: "rgba(191,63,63,.25)" }} />
            }
            placeholder="Introduzca su email"
            component={InputField}
          />
          <Field
            name="password"
            type="password"
            prefix={<Icon type="user" style={{ color: "rgba(25,0,0,.25)" }} />}
            placeholder="Introduzca su contraseña"
            component={InputField}
          />
          <Field
            name="name"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Introduzca su nombre"
            component={InputField}
          />
          <Field
            name="lastname"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Introduzca sus apellidos"
            component={InputField}
          />
          <div className="form-actions">
            <Button type="primary" htmlType="submit" className="width-150 mr-4">
              Register
            </Button>
          </div>
          <div className="mb-2">
            ¿Ya tienes una cuenta?{" "}
            <Link
              className="utils__link--blue utils__link--underlined"
              to="/login"
            >
              ¡Inicia sesión!
            </Link>
          </div>
        </div>
      </Form>
    );
  }
}

export const RegisterForm = withFormik({
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
