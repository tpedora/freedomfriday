import React from "react";
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@material-ui/core";
import { Field, useField } from "formik";

const DropDownComponent = ({ title, name, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error ? meta.error : "";

  return (
    <div>
      <FormControl style={{ width: " 175px" }} {...field} error={errorText[name]}>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Field name={name} as={Select} placeholder={title}>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Field>
        <FormHelperText>{errorText[name]}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default DropDownComponent;