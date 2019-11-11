import React from "react";
import { TextField, FormControl } from "@material-ui/core";
import { useField } from "formik";

const TextFieldComponent = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error ? meta.error : "";

  return (
    <div>
      <TextField placeholder={placeholder} helperText={errorText} {...field} error={errorText} />
    </div>
  )
};

export default TextFieldComponent;