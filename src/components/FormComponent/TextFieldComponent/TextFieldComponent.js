import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextFieldComponent = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error ? meta.error : "";

  return (
    <div>
      <TextField placeholder={placeholder} {...field} helperText={errorText} error={errorText} />
    </div>
  )
};

export default TextFieldComponent;