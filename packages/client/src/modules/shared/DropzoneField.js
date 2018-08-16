import * as React from "react";
import { FieldProps } from "formik";

import { Upload, Icon, message } from "antd";
const Dragger = Upload.Dragger;

const props = {
  name: "file",
  multiple: true,
  onChange(info) {
    console.log("ALIBABA INFO IS =>", info);
  }
};

export const DropzoneField = ({
  field: { name },
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Dragger>
  );
};

/* <Dropzone
  accept="image/jpeg, image/png"
  multiple={false}
  onDrop={([file]) => {
    setFieldValue(name, file);
  }}
  {...props}
>
  <p>Try dropping some files here, or click to select files to upload.</p>
</Dropzone> */
