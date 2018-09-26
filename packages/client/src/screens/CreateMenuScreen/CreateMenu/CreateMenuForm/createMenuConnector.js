import * as React from "../../../../../../../node_modules/@types/react/index";
import { Form as AntForm, Button } from "antd";
import { Form, Formik } from "formik";
import { withCreateMenu } from "@rufrontgen/controller";
import "./ui/style.scss";

const FormItem = AntForm.Item;

class C extends React.PureComponent {
  state = {
    page: 0
  };

  submit = async (values, { setSubmitting }) => {
    await this.props.createMenu(values);
    setSubmitting(false);
  };

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

  render() {
    return (
      <Formik
        initialValues={{
          name: ""
        }}
        onSubmit={this.submit}
      >
        {({ isSubmitting, values }) =>
          console.log(values) || (
            <Form style={{ display: "flex" }}>
              <div style={{ width: 400, margin: "auto" }}>
                {pages[this.state.page]}
                <React.Fragment>
                  <Field
                    label="Nombre"
                    name="name"
                    placeholder="Escribe el nombre del concurso."
                    component={InputField}
                  />
                </React.Fragment>
                <FormItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={isSubmitting}
                        >
                          Crear concurso
                        </Button>
                      </div>
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

export const CreateMenuConnector = withCreateMenu(C);
