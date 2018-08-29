import * as React from "react";
import { Field } from "formik";
import { InputField } from "modules/shared/inputField";
import { DropzoneField } from "modules/shared/DropzoneField";
import "./style.scss";

export const Page1 = () => (
  <React.Fragment>
    <Field
      label="Nombre"
      name="name"
      placeholder="Escribe el nombre del concurso."
      component={InputField}
    />
    <Field
      label="Categoría"
      name="category"
      placeholder="Escribe una categoría."
      component={InputField}
    />
    <Field
      label="Descripción"
      name="description"
      placeholder="Escribe una descripción."
      component={InputField}
    />
    <div>Adjunta una imágen:</div>
    <Field name="picture" component={DropzoneField} />
  </React.Fragment>
);
