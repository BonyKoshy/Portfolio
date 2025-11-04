// src/pages/NotFound.jsx
import React from "react";
import ErrorPage from "./ErrorPage";

function NotFound() {
  return (
    <ErrorPage
      errorCode="404"
      title="Page Not Found"
      message="Sorry, the page you are looking for doesn't exist or has been moved."
      imageSrc="/404.svg"
    />
  );
}

export default NotFound;
