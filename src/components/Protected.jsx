import React from "react";
import { Navigate } from "react-router-dom";

// A protected route that checks if the user is authenticated
const Protected = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If authenticated, allow access to the child component (e.g., Dashboard)
  return children;
};

export default Protected;
