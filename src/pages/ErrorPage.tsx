// src/pages/ErrorPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ErrorPageProps {
  errorCode: string;
  title: string;
  message: string;
  imageSrc?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode, title, message, imageSrc }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[var(--background)] text-[var(--text-primary)]">
       {/* Background placeholder if needed, but the original CSS didn't seem to have one other than variables */}
      
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 font-medium no-underline z-10"
      >
        <ArrowLeft size={20} />
        <span>Go Back to Home</span>
      </Link>

      <div className="bg-[var(--panel-bg)] backdrop-blur-md border border-[var(--prelayer-1)] rounded-2xl p-8 max-w-md w-full text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-300">
        <div className="w-48 h-48 flex items-center justify-center">
           {/* Image container styles */}
          <img
            src={imageSrc || "/error-placeholder.png"}
            alt={title}
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[var(--accent)] font-bold text-6xl m-0 leading-tight">{errorCode}</p>
          <h1 className="text-[var(--text-primary)] text-2xl font-bold m-0">{title}</h1>
          <p className="text-[var(--text-secondary)] text-base m-0 leading-relaxed max-w-[300px] mx-auto">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
