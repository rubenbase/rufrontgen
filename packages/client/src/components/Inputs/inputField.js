import * as React from "react";
import { Form, Input, InputNumber } from "antd";
const FormItem = Form.Item;

export const InputField = ({
  field: { onChange, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  onlyNumbers = false,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const Comp = onlyNumbers ? InputNumber : Input;
  return (
    <FormItem
      label={label}
      help={errorMsg}
      validateStatus={errorMsg ? "error" : undefined}
    >
      <Comp
        {...field}
        {...props}
        onChange={
          onlyNumbers
            ? newValue => setFieldValue(field.name, newValue)
            : onChange
        }
      />
    </FormItem>
  );
};
