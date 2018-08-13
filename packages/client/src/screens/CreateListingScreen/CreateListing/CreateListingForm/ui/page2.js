import * as React from "react";
import { Field } from "formik";
import { InputField } from "modules/shared/InputField";

export const Page2 = () => (
  <div>
    <Field name="price" placeholder="Price" component={InputField} />
  </div>
);
