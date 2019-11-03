import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingComponent = ({ rows, width }) => {
  return <Skeleton count={rows} />;
};

export default LoadingComponent;
