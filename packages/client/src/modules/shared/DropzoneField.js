import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";

const files = [];
export const DropzoneField = ({
  field: { name },
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Dropzone
      accept=".pdf"
      onDrop={([field]) => {
        setFieldValue(name, field);
      }}
    >
      <p>Try dropping some files here, or click to select files to upload.</p>
    </Dropzone>
  );
};
