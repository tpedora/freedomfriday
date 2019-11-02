import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

const renderComponent = array => {
  return array.map(a => (
    <div>
      <p style={{ display: "inline" }}>{`${a}: `}</p>
      <Skeleton width={50} />
    </div>
  ));
};

const LoadingComponent = ({ titles }) => {
  return <Fragment>{renderComponent(titles)}</Fragment>;
};

export default LoadingComponent;
