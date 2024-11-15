import React from "react";

const ModifyButton = ({ Icon }) => {
    return (
        <button className="bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full p-2">
            <Icon className="w-5 h-5" />
        </button>
    );
};

export default ModifyButton;
