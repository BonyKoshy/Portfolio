// src/pages/Forbidden.jsx
import React from "react";
import ErrorPage from "./ErrorPage";

function Forbidden() {
  return (
    <ErrorPage
      errorCode="403"
      title="Forbidden"
      message="Access to this page is restricted. You don’t have permission to view this resource."
      imageSrc="/403.svg"
    />
  );
}

export default Forbidden;
