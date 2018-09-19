import * as React from "react";
import Dropzone from "react-dropzone";
import "./style.scss";
import { Button } from "antd";

const files = [];
export const DropzoneField = ({
  field: { name, value },
  form: { setFieldValue, values, setValues }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const pUrl = (value ? value.preview : null) || values.pictureUrl;

  return (
    <div>
      <Dropzone
        accept="image/jpg, image/png"
        onDrop={([field]) => {
          setFieldValue(name, field);
        }}
        {...props}
      >
        <p className="droptext">Arrastra una imágen o haz clic aquí.</p>
      </Dropzone>
      {pUrl && (
        <img
          src={pUrl}
          alt={"Insert"}
          style={{
            maxHeight: 200
          }}
        />
      )}
      <Button
        onClick={() =>
          setValues({
            ...values,
            pictureUrl: null,
            picture: null
          })
        }
      >
        remove
      </Button>
    </div>
  );
};
