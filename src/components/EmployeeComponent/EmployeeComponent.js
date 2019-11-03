import React, { Fragment } from "react";

const EmployeeComponent = ({ employee }) => {
  const employeeData = employee.data.read();

  return (
    <Fragment>
      <div>
        <p style={{ display: "inline" }}>ID: </p>
        <span>{employeeData.id}</span>
      </div>
      <div>
        <p style={{ display: "inline" }}>Name: </p>
        <span>{employeeData.employee_name}</span>
      </div>
    </Fragment>
  );
};

export default EmployeeComponent;
