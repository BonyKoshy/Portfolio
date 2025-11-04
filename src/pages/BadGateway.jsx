// src/pages/BadGateway.jsx
import React from "react";
import ErrorPage from "./ErrorPage";

function BadGateway() {
  return (
    <ErrorPage
      errorCode="502"
      title="Bad Gateway"
      message="The server received an invalid response. Please try again later."
      imageSrc="/502.png"
    />
  );
}

export default BadGateway;
