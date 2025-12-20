// src/pages/RequestTimeout.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const RequestTimeout: React.FC = () => {
  return (
    <ErrorPage
      errorCode="408"
      title="Request Timeout"
      message="The server timed out waiting for the request."
      imageSrc="/408.svg"
    />
  );
};

export default RequestTimeout;
