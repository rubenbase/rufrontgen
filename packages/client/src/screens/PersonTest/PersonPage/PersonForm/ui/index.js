import * as React from "react";
import { withFormik, Field, Form } from "formik";
import { Icon, Button } from "antd";
import { InputField } from "components/Inputs/inputField";

class C extends React.PureComponent {
  render() {
    return (
      <div className="cat__pages__login__block__form">
        <h4 className="text-uppercase">
          <strong>Crear una Persona</strong>
        </h4>
        <br />

        <Form style={{ display: "flex" }}>
          <div style={{ width: 400, margin: "auto" }}>
            <Field
              name="name"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder={"Name"}
              component={InputField}
            />
            
            <Field
              name="lastName"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Last Name"
              component={InputField}
            />
            
            <Field
              name="age"
              placeholder="Edad"
              onlyNumbers = {true}
              min = {16}
              max = {120}
              component={InputField}
            />

            <div className="form-actions">
              <Button
                type="primary"
                htmlType="submit"
                className="width-150 mr-4"
              >
                {this.props.personData ? "Actualizar" : "Registro"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

const CreatePersonForm = withFormik({
  validateOnBlur: false,
  validateOnChange: false,
  enableReinitialize: true,
  mapPropsToValues: (props) => {

    if(props.personData){
      return {
        name: props.personData.name,
        lastName: props.personData.lastName,
        age: props.personData.age,
      };
    }

    return {};
    
  },
  
  handleSubmit: async (values, {props}) => {

    console.log(props);
    
    if (props.personData) { // Update if an ID has been passed to this component
      props.onUpdatePerson({id: props.personData.id, ...values});
    }

    else {
      props.onCreatePerson({ ...values });
    }

  }
})(C);

export default CreatePersonForm;
