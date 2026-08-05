import React from "react";
import { ErrorPage } from "@/components/ui/ErrorPage";

const NotFound: React.FC = () => {
  return (
    <ErrorPage
      errorCode="404"
      title="Resource Not Found"
      message="The requested endpoint was not found on this server. Path trace dropped. The resource may have been deleted, relocated, or never existed."
    />
  );
};

export default NotFound;
