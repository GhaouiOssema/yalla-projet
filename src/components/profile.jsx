import React from "react";
import "tailwindcss/tailwind.css";
import Icons from "./Icons/Icons";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <Link
            to="/account"
            className="flex  gap-4 p-2 rounded-lg border border-gray-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border">
                <Icons.UserIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="flex-1 space-y-1">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    Jared Palmer
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    jared@example.com
                </div>
            </div>
        </Link>
    );
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}
