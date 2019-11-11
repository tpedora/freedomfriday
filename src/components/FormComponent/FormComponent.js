import React from "react";
import { Formik, Form } from "formik";
import { Button, Radio } from "@material-ui/core";
import LabelControl from "./LabelControl/LabelControl";
import DropDownComponent from "./DropDownComponent/DropDownComponent";
import TextFieldComponent from "./TextFieldComponent/TextFieldComponent";
import { validationSchema } from "./utils";

const FormComponent = () => {
  return (
    <Formik initialValues={
      {
        fromAccount: "",
        toAccount: "",
        amount: "",
        recurring: ""
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        // Make async post call
        console.log("Response: ", data);
        // async call finishes
        setSubmitting(false);
      }}
      validationSchema={validationSchema}>
      {({ values, isSubmitting}) => (
        <Form style={{ marginLeft: "100px", marginTop: "30px" }}>
          <DropDownComponent title="From Account: " name="fromAccount" />
          <DropDownComponent title="To Account: " name="toAccount" />
          <TextFieldComponent placeholder="Amount" name="amount" type="input" />

          <div style={{ marginTop: "15px" }}>Ending Payment: </div>
          <LabelControl name="recurring" type="radio" value="never" label="never" control={<Radio />} />
          <LabelControl name="recurring" type="radio" value="payments" label="payments" control={<Radio />} />
          <LabelControl name="recurring" type="radio" value="end date" label="end date" control={<Radio />} />

          <div>
            <Button disabled={isSubmitting} variant="contained" color="primary" type="submit">Submit</Button>
          </div>

          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )
      }
    </Formik >
  );
};

export default FormComponent;