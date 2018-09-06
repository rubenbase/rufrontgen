import * as React from "react";
import { Field } from "formik";
import { InputField } from "modules/shared/inputField";
import { TagField } from "modules/shared/TagField";

export const Page3 = () => (
  <React.Fragment>
    <Field
      label="Nº de páginas mínimos"
      name="latitude"
      placeholder="Latitude"
      component={InputField}
      onlyNumbers
    />
    <Field
      label="Nº de páginas máximos"
      name="longitude"
      placeholder="Longitude"
      component={InputField}
      onlyNumbers
    />
    <Field
      label="Etiquetas"
      name="amenities"
      placeholder="Introduce la etiqueta y pulsa enter."
      component={TagField}
    />
  </React.Fragment>
);
