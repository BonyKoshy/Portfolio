// src/pages/InternalServerError.jsx
import React from 'react';
import ErrorPage from './ErrorPage';

function InternalServerError() {
  return (
    <ErrorPage
      errorCode="500"
      title="Internal Server Error"
      message="Oops! Something went wrong on our end. Please try again later."
      imageSrc="/500.svg"
    />
  );
}

export default InternalServerError;
