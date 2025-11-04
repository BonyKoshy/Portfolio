// src/pages/TooManyRequests.jsx
import React from "react";
import ErrorPage from "./ErrorPage";

function TooManyRequests() {
  return (
    <ErrorPage
      errorCode="429"
      title="Too Many Requests"
      message="You have sent too many requests in a short period. Please wait a moment and try again."
      imageSrc="/429.svg"
    />
  );
}

export default TooManyRequests;
