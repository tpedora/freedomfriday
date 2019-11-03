import React, { Suspense, useState } from "react";
import { fetchEmployee, createResource } from "../../utils";
import EmployeeComponent from "../../components/EmployeeComponent/EmployeeComponent";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import ErrorBoundary from "../../containers/ErrorBoundary/ErrorBoundary";
import "./styles.css";

const Employee = () => {
  const [employee, setEmployee] = useState(() => createResource(fetchEmployee("employees")));

  return (
    <div className="employee container">
      <h4>Employee data</h4>
      <Suspense fallback={<LoadingComponent rows={2} />}>
        <ErrorBoundary div="employee error" message="Custom Message, Employee Data is not loading ... ">
          <EmployeeComponent employee={employee} />
        </ErrorBoundary>
      </Suspense>
      <button
        style={{ marginTop: "10px" }}
        onClick={() => setEmployee(createResource(fetchEmployee("employee")))}
      >
        Break Employee Call
      </button>
    </div>
  );
};

export default Employee;
