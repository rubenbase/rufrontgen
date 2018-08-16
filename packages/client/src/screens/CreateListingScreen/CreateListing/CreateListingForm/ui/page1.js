import * as React from "react";
import { Field } from "formik";
import { InputField } from "modules/shared/inputField";
import { DropzoneField } from "modules/shared/DropzoneField";

export const Page1 = () => (
  <React.Fragment>
    <Field name="name" placeholder="Name" component={InputField} />
    <Field name="category" placeholder="Category" component={InputField} />
    <Field
      name="description"
      placeholder="Description"
      component={InputField}
    />
    <Field name="picture" placeholder="Picture" component={DropzoneField} />
  </React.Fragment>
);
