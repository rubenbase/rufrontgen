import * as React from "react";
import { Link } from "react-router-dom";
import { ViewMenu, UpdateMenu } from "@rufrontgen/controller";
import { Form as AntForm, Button } from "antd";
import { Form, Formik, Field } from "formik";
import { InputField } from "../../../../modules/shared/inputField";
const FormItem = AntForm.Item;

export class EditMenuConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { menuId }
      }
    } = this.props;
    return (
      <ViewMenu menuId={menuId}>
        {data => {
          if (!data.menu) {
            return <div>...loading</div>;
          }

          return (
            <UpdateMenu>
              {({ updateMenu }) => (
                <Formik
                  initialValues={{
                    name: data.menu.name,
                  }}
                  onSubmit={async values => {
                    const { __typename: ____, ...newValues } = values;

                    const result = await updateMenu({
                      variables: {
                        input: newValues,
                        menuId
                      }
                    });

                    console.log(result);
                  }}
                >
                  {({ isSubmitting, values }) =>
                    console.log(values) || (
                      <Form style={{ display: "flex" }}>
                      <div style={{ width: 400, margin: "auto" }}>
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
              )}
            </UpdateMenu>
          );
        }}
      </ViewMenu>
    );
  }
}
