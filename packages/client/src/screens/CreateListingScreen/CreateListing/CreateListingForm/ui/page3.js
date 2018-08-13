import * as React from "react";
import { Field } from "formik";
import { InputField } from "modules/shared/inputField";

export const Page3 = () => (
  <React.Fragment>
    <Field
      name="latitude"
      placeholder="Latitude"
      component={InputField}
      onlyNumbers
    />
    <Field
      name="longitude"
      placeholder="Longitude"
      component={InputField}
      onlyNumbers
    />
    <Field name="amenities" placeholder="Amenities" component={InputField} />
  </React.Fragment>
);
