import * as React from "react";
import { withFormik, FormikProps, Field, Form } from "formik";
import { Form as FormA, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@rufrontgen/controller";
import { InputField } from "../../shared/inputField";

const FormItem = FormA.Item;

interface FormValues {
  email: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <div style={{ margin: 250 }}>
        <Form style={{ display: "flex" }}>
          <div style={{ width: 400, margin: "auto" }}>
            <Field
              name="email"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              }
              placeholder="Email"
              component={InputField}
            />
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                reset password
              </Button>
            </FormItem>

            <FormItem>
              Or <Link to="/register">Go back!</Link>
            </FormItem>
          </div>
        </Form>
      </div>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
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
