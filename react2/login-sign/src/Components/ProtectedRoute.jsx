import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    // console.log("isAuthenticated==>",isAuthenticated);
    // console.log("children==>",children);
    
    if (!isAuthenticated) {
        return  <Navigate to="/login" replace />;
    }

    return children;
    
};

export default ProtectedRoute;

