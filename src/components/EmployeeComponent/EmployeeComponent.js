import React, { Fragment } from "react";

const EmployeeComponent = ({ resource }) => {
  const employee = resource.data.read();

  return (
    <Fragment>
      <div>
        <p style={{ display: "inline" }}>ID: </p>
        <span>{employee.id}</span>
      </div>
      <div>
        <p style={{ display: "inline" }}>Name: </p>
        <span>{employee.employee_name}</span>
      </div>
    </Fragment>
  );
};

export default EmployeeComponent;
