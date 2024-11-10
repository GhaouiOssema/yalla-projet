// index.jsx
import React from "react";
import LoginWith from "../LoginWith/component/LoginWith";

const IndexPage = () => {
  return (
    <div className="w-full ">
      <LoginWith
        iconSrc="https://img.icons8.com/color/48/google-logo.png"
        text="Se connecter avec Google"
      />
      <LoginWith
        iconSrc="https://img.icons8.com/color/48/facebook-new.png"
        text="Se connecter avec Facebook"
      />
      <LoginWith
        iconSrc="https://img.icons8.com/ios-filled/50/mac-os.png"
        text="Se connecter avec Apple"
      />
    </div>
  );
};

export default IndexPage;
