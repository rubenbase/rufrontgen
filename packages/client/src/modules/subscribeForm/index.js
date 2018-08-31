import * as React from "react";
import { Form as AntForm, Button, Icon, Checkbox } from "antd";
import { Form, Formik, Field } from "formik";
import { withSubscribeToList } from "@rufrontgen/controller";
import { InputField } from "modules/shared/inputField";
import { Link } from "react-router-dom";

const FormItem = AntForm.Item;

class C extends React.PureComponent {
  submit = async (values, { setSubmitting }) => {
    await this.props.subscribeToList(values);
    setSubmitting(false);
  };
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          name: "",
          lastname: ""
        }}
        onSubmit={this.submit}
      >
        {({ isSubmitting, values }) =>
          console.log(values) || (
            <Form style={{ display: "flex" }}>
              <div style={{ width: 400, margin: "auto" }}>
                <FormItem>
                  <Field
                    name="email"
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                    component={InputField}
                  />
                  <Field
                    name="name"
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Nombre"
                    component={InputField}
                  />
                  <Field
                    name="lastname"
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Apellido"
                    component={InputField}
                  />
                  <div className="form-check">
                    <Checkbox>
                      Acepto los{" "}
                      <Link to="/legal" target="_blank">
                        Términos y condiciones
                      </Link>
                    </Checkbox>
                  </div>
                  <div className="form-actions">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="width-150 mr-4"
                    >
                      Quiero información
                    </Button>
                  </div>
                </FormItem>
              </div>
            </Form>
          )
        }
      </Formik>
    );
  }
}

export const SubscribeForm = withSubscribeToList(C);
