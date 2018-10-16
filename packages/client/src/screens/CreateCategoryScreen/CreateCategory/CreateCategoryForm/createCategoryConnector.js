import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { Form, Formik } from "formik";
import { withCreateCategories } from "@rufrontgen/controller";
import { Field } from "formik";
import { InputField } from "components/Inputs/inputField";

const FormItem = AntForm.Item;

class C extends React.PureComponent {
  submit = async (values, { setSubmitting }) => {
    console.log("ALIBABA  propsss ===>", this.props);
    console.log("ALIBABA valuess ===>", values);

    await this.props.createCategories(values);
    setSubmitting(false);
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: " "
        }}
        onSubmit={this.submit}
      >
        {({ isSubmitting, values }) =>
          console.log(values) || (
            <Form style={{ display: "flex" }}>
              <div style={{ width: 800, margin: "auto" }}>
                <FormItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Field
                      label="Categoría"
                      name="name"
                      placeholder="Escribe una categoría."
                      component={InputField}
                    />

                    <Button type="primary" htmlType="submit">
                      {" "}
                      Crear Categoria
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

export const CreateCategoryConnector = withCreateCategories(C);
