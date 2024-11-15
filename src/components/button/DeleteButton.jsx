import React from "react";

const DeleteButtonIcon = ({ Icon, setIsOpen }) => {
    return (
        <button
            className="text-red-500 hover:text-red-600 p-2"
            onClick={() => setIsOpen(true)}>
            <Icon className="w-5 h-5" />
        </button>
    );
};

export default DeleteButtonIcon;
