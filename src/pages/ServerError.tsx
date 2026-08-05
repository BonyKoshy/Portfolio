import React from "react";
import { ErrorPage } from "@/components/ui/ErrorPage";

const ServerError: React.FC = () => {
  return (
    <ErrorPage
      errorCode="500"
      title="Internal Server Error"
      message="The server encountered an unexpected condition that prevented it from fulfilling the request. Core systems may be temporarily offline or restarting."
    />
  );
};

export default ServerError;
