import * as React from "react";
import { FieldProps } from "formik";
import { Input } from "react-native-elements";

const errStyle = {
  color: "red"
};

export class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: null };
  }

  onChange = text => {
    const {
      form: { setFieldValue },
      field: { name }
    } = this.props;
    setFieldValue(name, text);
  };

  render() {
    const {
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...props
    } = this.props;
    const errorMsg = touched[field.name] && errors[field.name];
    return (
      <Input
        {...props}
        errorStyle={errStyle}
        errorMessage={errorMsg}
        onChangeText={this.onChange}
        value={field.value}
      />
    );
  }
}
