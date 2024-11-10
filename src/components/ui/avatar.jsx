// src/components/ui/avatar.jsx

import React from "react";

const Avatar = () => {
  return (
    <div className="avatar  ">
      {/* You can add avatar image or content here */}
      <img
        src="/path/to/avatar.png"
        alt="Avatar"
        className="w-16 h-16 rounded-full border"
      />
    </div>
  );
};

export { Avatar };
