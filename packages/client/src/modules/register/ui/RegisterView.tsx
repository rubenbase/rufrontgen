import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { validUserSchema } from "@rufrontgen/common";
import { InputField } from "../../shared/inputField";

const FormItem = FormA.Item;

interface FormValues {
  email: string;
  password: string;
  name: string;
  lastname: string;
  address: string;
  country: string;
  postalcode: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class RegistrationForm extends React.PureComponent<
  FormikProps<FormValues> & Props
> {
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

            <Field
              name="name"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
                // tslint:disable-next-line:jsx-curly-spacing
              }
              placeholder="Name"
              component={InputField}
            />

            <Field
              name="lastname"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
                // tslint:disable-next-line:jsx-curly-spacing
              }
              placeholder="Last name"
              component={InputField}
            />

            <Field
              name="address"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
                // tslint:disable-next-line:jsx-curly-spacing
              }
              placeholder="Address"
              component={InputField}
            />

            <Field
              name="country"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
                // tslint:disable-next-line:jsx-curly-spacing
              }
              placeholder="Country"
              component={InputField}
            />

            <Field
              name="postalcode"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
                // tslint:disable-next-line:jsx-curly-spacing
              }
              placeholder="Postal Code"
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
              Or <a href="">Login now!</a>
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
    lastname: "",
    address: "",
    country: "",
    postalcode: ""
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegistrationForm);
