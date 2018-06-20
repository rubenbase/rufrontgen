import * as React from "react";
import { Form, Input, Icon, Button } from "antd";
import * as yup from "yup";
import { withFormik, FormikErrors, FormikProps } from "formik";

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
    const { values, handleChange, handleBlur, handleSubmit } = this.props;

    return (
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <div style={{ width: 400, margin: "auto" }}>
          <FormItem>
            <Input
              name="email"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <Input
              name="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <Input
              name="name"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <Input
              name="lastname"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <Input
              name="address"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <Input
              name="country"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <Input
              name="postalcode"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Postal Code"
              value={values.postalcode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>

          {/* <FormItem>
            <Select placeholder="Gender" value={values.postalcode}>
              <Option value="male">male</Option>

              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </FormItem> */}

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
    );
  }
}

const emailNotLongEnough = "email must be at least 3 characters";
const invalidEmail = "email must be a valid email";
const passwordNotLongEnough = "password must be at least 3 characters";

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255);

const schema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail),
  password: registerPasswordValidation
});

export const RegisterView = withFormik<Props, FormValues>({
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
