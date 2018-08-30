import * as React from "react";
import { Field } from "formik";
import { InputField } from "modules/shared/inputField";

export const Page2 = () => (
  <React.Fragment>
    <Field
      label="Dotación del premio en €:"
      name="price"
      placeholder="Price"
      component={InputField}
      onlyNumbers
    />
  </React.Fragment>
);
