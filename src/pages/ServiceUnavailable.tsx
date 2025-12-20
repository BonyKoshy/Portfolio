// src/pages/ServiceUnavailable.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const ServiceUnavailable: React.FC = () => {
  return (
    <ErrorPage
      errorCode="503"
      title="Service Unavailable"
      message="The server is currently unavailable (because it is overloaded or down for maintenance)."
      imageSrc="/503.svg"
    />
  );
};

export default ServiceUnavailable;
