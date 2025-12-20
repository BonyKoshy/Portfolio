// src/pages/InternalServerError.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const InternalServerError: React.FC = () => {
  return (
    <ErrorPage
      errorCode="500"
      title="Internal Server Error"
      message="The server encountered an internal error and was unable to complete your request."
      imageSrc="/500.svg"
    />
  );
};

export default InternalServerError;
