// src/pages/GatewayTimeout.jsx
import React from "react";
import ErrorPage from "./ErrorPage";

function GatewayTimeout() {
  return (
    <ErrorPage
      errorCode="504"
      title="Gateway Timeout"
      message="The server did not receive a timely response. Please try again later."
      imageSrc="/504.svg"
    />
  );
}

export default GatewayTimeout;
