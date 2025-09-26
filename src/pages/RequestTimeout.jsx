// src/pages/RequestTimeout.jsx
import React from 'react';
import ErrorPage from './ErrorPage';

function RequestTimeout() {
  return (
    <ErrorPage
      errorCode="408"
      title="Request Timeout"
      message="The server took too long to respond. Please refresh the page and try again."
      imageSrc="/408.png"
    />
  );
}

export default RequestTimeout;
