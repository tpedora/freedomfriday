import React, { Suspense } from "react";
import { Container } from "semantic-ui-react";
import { fetchPerson, fetchLocation, createResource } from "../../utils";
import PersonComponent from "../../components/PersonComponent/PersonComponent";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import LocationComponent from "../../components/LocationComponent/LocationComponent";
import "./styles.css";

const titles = ["Title", "First", "Last", "City", "State"];

const Person = () => {
  let person = createResource(fetchPerson());
  let location = createResource(fetchLocation());

  return (
    <div>
      <Container className="test container">
        <h4>Suspense using fallback component</h4>
        <Suspense fallback={<LoadingComponent titles={titles} />}>
          <PersonComponent person={person} />
          <LocationComponent location={location} />
        </Suspense>
      </Container>
    </div>
  );
};

export default Person;
