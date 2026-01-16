import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "@/shared/ui/Button";
import { Meta } from "@/shared/ui/Meta/Meta";

interface ErrorPageProps {
  errorCode?: string;
  title?: string;
  message?: string;
  imageSrc?: string;
}

const NotFound: React.FC<ErrorPageProps> = ({
  errorCode = "404",
  title = "Page Not Found",
  message = "Sorry, the page you are looking for doesn't exist or has been moved.",
  imageSrc = "/404.svg",
}) => {
  return (
    <div
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-text-primary"
    >
      <Meta title="404 ERROR" description={message} />
      <div className="bg-panel backdrop-blur-md border border-prelayer-1 rounded-2xl p-8 max-w-md w-full text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-300">
        <div className="w-48 h-48 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-accent font-bold text-6xl m-0 leading-tight">
            {errorCode}
          </p>
          <h1 className="text-text-primary text-2xl font-bold m-0">{title}</h1>
          <p className="text-text-secondary text-base m-0 leading-relaxed max-w-75 mx-auto">
            {message}
          </p>
          <div className="mt-6">
            <PrimaryButton asChild>
              <Link to="/">Back to Home</Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
