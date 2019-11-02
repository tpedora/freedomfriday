import React, { Suspense } from "react";
import { fetchEmployee, createResource } from "../../utils";
import EmployeeComponent from "../../components/EmployeeComponent/EmployeeComponent";
import "./styles.css";

const Employee = () => {
  const resource = createResource(fetchEmployee());

  return (
    <div className="employee container">
      <h4>Passing Suspense an empty string as fallback</h4>
      <Suspense fallback="">
        <EmployeeComponent resource={resource} />
      </Suspense>
    </div>
  );
};

export default Employee;
