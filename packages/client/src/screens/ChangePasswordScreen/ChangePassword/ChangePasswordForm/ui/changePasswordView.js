import * as React from "react";
import { withFormik, FormikProps, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import { changePasswordSchema } from "@rufrontgen/common";

import { InputField } from "components/Inputs/inputField";

const FormItem = FormA.Item;

class C extends React.PureComponent {
  render() {
    return (
      <Form className="login-form">
        <Field
          name="newPassword"
          type="password"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="New password"
          component={InputField}
        />
        <div className="form-actions text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Change password
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

export const ChangePasswordView = withFormik({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({
    newPassword: ""
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
