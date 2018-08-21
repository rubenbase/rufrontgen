import * as React from "react";
import { Link } from "react-router-dom";
import { Form as AntForm, Button, Icon, Checkbox } from "antd";
import { Form, Formik, FormikActions, Field } from "formik";
import { withCreateListing } from "@rufrontgen/controller";
import { InputField } from "modules/shared/inputField";

const FormItem = AntForm.Item;

class C extends React.PureComponent {
  state = {
    page: 0
  };

  submit = async (values, { setSubmitting }) => {
    console.log("ALIBABA sending values", values);
    setSubmitting(false);
  };

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

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
                  <div class="form-check">
                    <Checkbox>
                      Acepto los{" "}
                      <a href="./legal" target="_blank">
                        Términos y condiciones
                      </a>
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

export const SubscribeForm = withCreateListing(C);
