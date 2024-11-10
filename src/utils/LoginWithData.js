import React from "react";
import { loginData } from "../utils/LoginWithData"; // Corrected the import statement

const LoginWith = () => {
  return (
    <div className="mb-4 flex w-full h-[50px] items-center justify-center gap-2 rounded-lg bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white border border-gray-200">
      <div className="rounded-full text-xl">
        <img
          width="23"
          height="23"
          src={loginData.imageUrl}
          alt={loginData.altText} // Added alt attribute for accessibility
        />
      </div>
      <p className="font-medium lg:text-sm">{loginData.connectText}</p>{" "}
      {/* Removed extra curly braces here */}
    </div>
  );
};

export default LoginWith;
