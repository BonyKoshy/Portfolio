// src/pages/NotFound.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const NotFound: React.FC = () => {
  return (
    <ErrorPage
      errorCode="404"
      title="Page Not Found"
      message="Sorry, the page you are looking for doesn't exist or has been moved."
      imageSrc="/404.svg"
    />
  );
};

export default NotFound;
