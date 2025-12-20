// src/pages/GatewayTimeout.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const GatewayTimeout: React.FC = () => {
  return (
    <ErrorPage
      errorCode="504"
      title="Gateway Timeout"
      message="The server did not receive a timely response from the upstream server."
      imageSrc="/504.svg"
    />
  );
};

export default GatewayTimeout;
