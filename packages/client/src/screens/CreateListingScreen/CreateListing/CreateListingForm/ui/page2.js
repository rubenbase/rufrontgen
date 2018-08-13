import * as React from "react";
import { Field } from "formik";
import { InputField } from "modules/shared/InputField";

export const Page2 = () => (
  <React.Fragment>
    <Field name="price" placeholder="Price" component={InputField} />
  </React.Fragment>
);
