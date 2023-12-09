import React from "react";
import ReactLoading, { LoadingType } from "react-loading";

const LoadingComponent = ({
  type,
  color,
}: {
  type: LoadingType | undefined;
  color: string;
}) => (
  <div className="flex justify-center mt-10">
    <ReactLoading type={type} color={color} height={50} width={50} />
  </div>
);

export default LoadingComponent;
