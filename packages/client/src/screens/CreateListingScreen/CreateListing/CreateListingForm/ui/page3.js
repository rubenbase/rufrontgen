import * as React from "react";
import { Field } from "formik";
import { InputField } from "modules/shared/inputField";
import { TagField } from "modules/shared/TagField";

export const Page3 = () => (
  <React.Fragment>
    <Field
      label="Nº de caracteres mínimos"
      placeholder="Longitude"
      component={InputField}
      onlyNumbers
    />
    <Field
      label="Nº de caracteres máximos"
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
