import React from "react";

const StatusBadges = ({ text, className }) => {
    return (
        <span
            className={`${className} text-white text-xs py-1 px-2 rounded-full text-center`}>
            {text}
        </span>
    );
};

export default StatusBadges;
