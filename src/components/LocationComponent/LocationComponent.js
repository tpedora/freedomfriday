import React from "react";
import Skeleton from "react-loading-skeleton";

const LocationComponent = ({ location }) => {
  const locationData = location.data.read();

  return (
    <div>
      <div>
        <p style={{ display: "inline" }}>City: </p>
        <span>{locationData.city || <Skeleton />}</span>
      </div>
      <div>
        <p style={{ display: "inline" }}>State: </p>
        <span>{locationData.state || <Skeleton />}</span>
      </div>
    </div>
  );
};

export default LocationComponent;
