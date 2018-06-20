import * as React from "react";
import { Form, Input, Icon, Button } from "antd";
import { withFormik, FormikErrors, FormikProps } from "formik";
import { validUserSchema } from "@rufrontgen/common";

const FormItem = Form.Item;

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
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors
    } = this.props;

    return (
      <div style={{ margin: 250 }}>
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <div style={{ width: 400, margin: "auto" }}>
            <FormItem
              help={touched.email && errors.email ? errors.email : ""}
              // tslint:disable-next-line:jsx-no-multiline-js
              validateStatus={
                touched.email && errors.email ? "error" : undefined
              }
            >
              <Input
                name="email"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>

            <FormItem
              help={touched.password && errors.password ? errors.password : ""}
              // tslint:disable-next-line:jsx-no-multiline-js
              validateStatus={
                touched.password && errors.password ? "error" : undefined
              }
            >
              <Input
                name="password"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
            <FormItem
              help={touched.name && errors.name ? errors.name : ""}
              validateStatus={touched.name && errors.name ? "error" : undefined}
            >
              <Input
                name="name"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
            <FormItem
              help={touched.lastname && errors.lastname ? errors.lastname : ""}
              // tslint:disable-next-line:jsx-no-multiline-js
              validateStatus={
                touched.lastname && errors.lastname ? "error" : undefined
              }
            >
              <Input
                name="lastname"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Lastname"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
            <FormItem
              help={touched.address && errors.address ? errors.address : ""}
              // tslint:disable-next-line:jsx-no-multiline-js
              validateStatus={
                touched.address && errors.address ? "error" : undefined
              }
            >
              <Input
                name="address"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
            <FormItem
              help={touched.country && errors.country ? errors.country : ""}
              // tslint:disable-next-line:jsx-no-multiline-js
              validateStatus={
                touched.country && errors.country ? "error" : undefined
              }
            >
              <Input
                name="country"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
            <FormItem
              // tslint:disable-next-line:jsx-no-multiline-js
              help={
                touched.postalcode && errors.postalcode ? errors.postalcode : ""
              }
              // tslint:disable-next-line:jsx-no-multiline-js
              validateStatus={
                touched.postalcode && errors.postalcode ? "error" : undefined
              }
            >
              <Input
                name="postalcode"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Postal Code"
                value={values.postalcode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>

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
        </form>
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
