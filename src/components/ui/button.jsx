// src/components/ui/button.jsx

import React from "react";

// Update the Button component to accept className and merge it with default styles
const Button = ({ children, onClick, className = "" }) => {
  return (
    <button className={` rounded-full h-12 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
