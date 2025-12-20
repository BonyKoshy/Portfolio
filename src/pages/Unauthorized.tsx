// src/pages/Unauthorized.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const Unauthorized: React.FC = () => {
  return (
    <ErrorPage
      errorCode="401"
      title="Unauthorized"
      message="You do not have permission to access this page. Please log in."
      imageSrc="/401.svg"
    />
  );
};

export default Unauthorized;
