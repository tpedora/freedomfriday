import React from "react";
import { useField } from "formik";
import { FormControlLabel } from "@material-ui/core";

const LabelControl = ({ control, label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={control} label={label} />;
};

export default LabelControl;