import React, { useEffect } from "react";
import { ProfileMobile } from "../utils/navigationLink";
import { MdLogout } from "react-icons/md";
import DEU from "../assets/DEU.png";
import ENG from "../assets/ENG.png";
import ESP from "../assets/ESP.png";
import FR from "../assets/FR.png";
import { Link } from "react-router-dom";
import Profile from "./profile";

const ProfileMobileView = (props) => {
    const languages = [
        { src: ENG, label: "ENGLISH" },
        { src: FR, label: "FRANÇAIS" },
        { src: DEU, label: "DEUTSCH" },
        { src: ESP, label: "SPANISH" },
    ];
    return (
        <>
            {props.openPorfileDropdown && (
                <div
                    className={`fixed z-30 pt-[66px] right-0 lg:right-10 top-0 lg:top-2`}>
                    <div className="h-screen lg:h-full bg-white divide-y divide-gray-100 rounded-none lg:rounded-lg shadow-xl lg:w-[18rem] w-screen">
                        <div className="px-4 py-3 text-sm text-gray-900 ">
                            <Profile />
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            {ProfileMobile.map((menu, index) => (
                                <li key={index} to={menu.link}>
                                    <Link
                                        to={menu.link}
                                        onClick={() =>
                                            props.setOpenPorfileDropdown(false)
                                        }
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-md ">
                                        <menu.icon className="w-5 h-5" />
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="fixed bottom-3 left-0 right-0 lg:relative flex items-center gap-3 px-4 py-3 text-sm text-red-700 hover:bg-gray-100">
                            <MdLogout className="w-5 h-5" />
                            Se deconnecter
                        </div>
                    </div>
                </div>
            )}

            {props.translateDropdownOpen && (
                <div
                    className={`fixed z-30 pt-[64px] right-0 lg:right-52 top-0 lg:top-2`}>
                    <div className="h-screen lg:h-full w-[19rem] lg:w-[18rem] divide-y divide-gray-100 rounded-none lg:rounded-lg shadow-xl ">
                        <ul className="ml-auto h-full right-0 w-full top-[70px] flex flex-col bg-white rounded-none lg:rounded-lg shadow-xl">
                            <div className="py-2 flex flex-col rounded gap-3 w-full h-auto">
                                {languages.map((language, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center px-3 py-3 rounded-lg hover-bg cursor-pointer">
                                        <div className="w-5 h-5">
                                            <img
                                                src={language.src}
                                                alt={language.label}
                                            />
                                        </div>
                                        <li className="ml-2 text-sm tracking-wide truncate">
                                            {language.label}
                                        </li>
                                    </div>
                                ))}
                            </div>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileMobileView;
