import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full max-w-sm bg-white">
            <div className="relative">
                <button
                    id="dropdownButton"
                    className="absolute top-0 right-0 inline-block text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-1.5"
                    type="button"
                    onClick={toggleDropdown}>
                    <span className="sr-only">Open dropdown</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                </button>
                <div
                    id="dropdown"
                    className={`absolute top-8 right-0 z-10 ${
                        isOpen ? "" : "hidden"
                    } text-base list-none bg-white divide-y divide-gray-100 rounded-lg w-44`}>
                    <ul className="py-2" aria-labelledby="dropdownButton">
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Edit
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Export Data
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                Delete
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center pb-10">
                <img
                    className="w-24 h-24 mb-3 rounded-full"
                    src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
                    alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                    Bonnie Green
                </h5>
                <span className="text-sm text-gray-500">Visual Designer</span>
                <div className="flex mt-6">
                    <div className="flex items-center justify-between w-full px-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                            Téléphone
                        </span>
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                            Email
                        </span>
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Identité
                        </span>
                    </div>
                </div>
                <span className="mt-2 text-sm text-gray-500">
                    <Link to="#" className=" underline">
                        CONTINUER LA VÉRIFICATION
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default ProfileCard;
