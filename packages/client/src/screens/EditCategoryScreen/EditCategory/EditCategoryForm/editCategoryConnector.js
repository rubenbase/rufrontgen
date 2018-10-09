import * as React from "react";
import { Link } from "react-router-dom";
import { ViewCategory, UpdateCategory } from "@rufrontgen/controller";
import { Form as AntForm, Button } from "antd";
import { Form, Formik } from "formik";
import { Field } from "formik";
import { InputField } from "modules/shared/inputField";

const FormItem = AntForm.Item;

export class EditCategoryConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { categoryId }
      }
    } = this.props;
    return (
      <ViewCategory categoryId={categoryId}>
        {data => {
          if (!data.category) {
            return <div>...loading</div>;
          }

          return (
            <UpdateCategory>
              {({ UpdateCategory }) => (
                <Formik
                  initialValues={{
                    id: data.category.id,
                    name: data.category.name
                  }}
                  onSubmit={async values => {
                    const { __typename: ___, ...newValues } = values;

                    const result = await UpdateCategory({
                      variables: {
                        input: newValues,
                        categoryId
                      }
                    });

                    console.log(result);
                  }}
                >
                  {({ isSubmitting, values }) =>
                    console.log(values) || (
                      <Form style={{ display: "flex" }}>
                        <div style={{ width: 400, margin: "auto" }}>
                          <FormItem>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end"
                              }}
                            >
                              <Field
                                label="Nombre"
                                name="name"
                                placeholder="Escribe el nombre del concurso."
                                component={InputField}
                              />
                              <div>
                                <Button
                                  type="primary"
                                  htmlType="submit"
                                  disabled={isSubmitting}
                                >
                                  Modificar categoria
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
            </UpdateCategory>
          );
        }}
      </ViewCategory>
    );
  }
}
