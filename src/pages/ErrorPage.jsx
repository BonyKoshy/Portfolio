// src/pages/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./ErrorPage.css";

function ErrorPage({ errorCode, title, message, imageSrc }) {
  return (
    <div className="error-page-container">
      <Link to="/" className="back-button">
        <ArrowLeft size={20} />
        <span>Go Back to Home</span>
      </Link>
      <div className="error-card">
        <div className="error-image-container">
          {/* You can replace this with your actual image later */}
          <img
            src={imageSrc || "/error-placeholder.png"}
            alt={title}
            className="error-image"
          />
        </div>
        <div className="error-content">
          <p className="error-code">{errorCode}</p>
          <h1 className="error-title">{title}</h1>
          <p className="error-message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
