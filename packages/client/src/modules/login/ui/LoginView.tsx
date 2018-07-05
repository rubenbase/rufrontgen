import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { validUserSchema } from "@rufrontgen/common";
import { InputField } from "../../shared/inputField";

const FormItem = FormA.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <div style={{ margin: 250 }}>
        <Form style={{ display: "flex" }}>
          <div style={{ width: 400, margin: "auto" }}>
            <Field
              name="email"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
                // tslint:disable-next-line:jsx-curly-spacing
              }
              placeholder="Email"
              component={InputField}
            />

            <Field
              name="password"
              type="password"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
                // tslint:disable-next-line:jsx-curly-spacing
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
              <a href="">Forgot password</a>
            </FormItem>
          </div>
        </Form>
      </div>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
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
