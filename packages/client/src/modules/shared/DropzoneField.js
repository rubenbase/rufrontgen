import * as React from "react";
import { FieldProps } from "formik";
import { Form, Select } from "antd";

const FormItem = Form.Item;

export const DropzoneField = ({
  field: { onChange, onBlur: _, ...field },
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <FormItem
      label={label}
      help={errorMsg}
      validateStatus={errorMsg ? "error" : undefined}
    >
      <Select
        {...field}
        {...props}
        mode="tags"
        onChange={newValue => setFieldValue(field.name, newValue)}
      />
    </FormItem>
  );
};
