// src/pages/TooManyRequests.tsx
import React from "react";
import ErrorPage from "./ErrorPage";

const TooManyRequests: React.FC = () => {
  return (
    <ErrorPage
      errorCode="429"
      title="Too Many Requests"
      message="You have sent too many requests in a given amount of time."
      imageSrc="/429.svg"
    />
  );
};

export default TooManyRequests;
