// src/pages/ServiceUnavailable.jsx
import React from 'react';
import ErrorPage from './ErrorPage';

function ServiceUnavailable() {
  return (
    <ErrorPage
      errorCode="503"
      title="Service Unavailable"
      message="The service is temporarily unavailable. Please try again later."
      imageSrc="/503.svg"
    />
  );
}

export default ServiceUnavailable;
