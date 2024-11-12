// src/components/ui/card.jsx

import React from "react";

// Card Composant
const Card = ({ children, className = "" }) => {
  return (
    <div className={`w-full card overflow-hidden ${className}`}>{children}</div>
  );
};

// CardTitle Component

const CardTitle = ({ children, className = "" }) => {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
};

// CardContent Composant
const CardContent = ({ children, className = "" }) => {
  return <div className={`px-4 py-2 rounded ${className}`}>{children}</div>;
};

// CardFooter Composant
const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`card-footer p-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

// CardHeader Composant
const CardHeader = ({ children, className = "" }) => {
  return <div className={`card-header  ${className}`}>{children}</div>;
};

export { Card, CardContent, CardFooter, CardHeader, CardTitle };
