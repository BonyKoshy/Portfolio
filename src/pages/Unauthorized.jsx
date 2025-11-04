// src/pages/Unauthorized.jsx
import React from "react";
import ErrorPage from "./ErrorPage";

function Unauthorized() {
  return (
    <ErrorPage
      errorCode="401"
      title="Unauthorized"
      message="You are not authorized to view this page. Please log in or verify your credentials."
      imageSrc="/401.svg"
    />
  );
}

export default Unauthorized;
