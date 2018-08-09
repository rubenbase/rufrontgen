import * as React from "react";
import { withFormik, FormikProps, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import { InputField } from "modules/shared/inputField";

const FormItem = FormA.Item;

class C extends React.PureComponent {
  render() {
    return (
      <Form className="login-form">
        <Field
          name="email"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Email"
          component={InputField}
        />
        <div className="form-actions text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            reset password
          </Button>
        </div>

        <div className="text-center">
          Or{" "}
          <Link className="text-default" to="/login">
            Go back!
          </Link>
        </div>
      </Form>
    );
  }
}

export const ForgotPasswordView = withFormik({
  mapPropsToValues: () => ({
    email: ""
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
