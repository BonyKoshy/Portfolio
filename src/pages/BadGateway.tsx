// src/pages/BadGateway.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const BadGateway: React.FC = () => {
  return (
    <ErrorPage
      errorCode="502"
      title="Bad Gateway"
      message="The server received an invalid response from the upstream server."
      imageSrc="/502.svg"
    />
  );
};

export default BadGateway;
