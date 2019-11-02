import React, { Fragment } from "react";

const PersonComponent = ({ person }) => {
  const personData = person.data.read();

  return (
    <Fragment>
      <div>
        <p style={{ display: "inline" }}>Title: </p>
        <span>{personData.title}</span>
      </div>
      <div>
        <p style={{ display: "inline" }}>First: </p>
        <span>{personData.first}</span>
      </div>
      <div>
        <p style={{ display: "inline" }}>Last: </p>
        <span>{personData.last}</span>
      </div>
    </Fragment>
  );
};

export default PersonComponent;
