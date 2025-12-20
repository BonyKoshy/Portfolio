// src/pages/Forbidden.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const Forbidden: React.FC = () => {
  return (
    <ErrorPage
      errorCode="403"
      title="Forbidden"
      message="Access to this resource on the server is denied."
      imageSrc="/403.svg"
    />
  );
};

export default Forbidden;
