import React, { Suspense, useState } from "react";
import { fetchPerson, fetchLocation, createResource } from "../../utils";
import PersonComponent from "../../components/PersonComponent/PersonComponent";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import LocationComponent from "../../components/LocationComponent/LocationComponent";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./styles.css";

const Person = () => {
  const [person, setPerson] = useState(() => createResource(fetchPerson()));
  const [location, setLocation] = useState(() => createResource(fetchLocation()));

  return (
    <div className="test container">
      <h4>Suspense using fallback component</h4>
      <Suspense fallback={<LoadingComponent rows={5} />}>
        <ErrorBoundary message="Person Data is not loading ...">
          <PersonComponent person={person} />
          <LocationComponent location={location} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default Person;
