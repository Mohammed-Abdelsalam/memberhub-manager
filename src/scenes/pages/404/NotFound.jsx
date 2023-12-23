// NotFound.jsx
import React from "react";

// React router
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for might be in another castle.
        </p>
        <Link to="/members-list" className="text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
