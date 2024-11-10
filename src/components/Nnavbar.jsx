import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo1.png";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import { VscAccount } from "react-icons/vsc";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { AiOutlineMessage } from "react-icons/ai";

function Nnavbar({
    TranslateRef,
    setTranslateDropdownOpen,
    setOpenPorfileDropdown,
    toggleSidebar,
    openPorfileDropdownRef,
    messagenoti,
    verifynoti,
    setMovesidebar,
}) {
    const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
    const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [colisDropDownOpen, setColisDropDownOpen] = useState(false);
    const timeoutRef = useRef(null);
    const profileRef = useRef(null);
    const accountRef = useRef(null);

    const colisRef = useRef(null);
    function handleDropdownMouseLeave(setState, useRef) {
        useRef.current = setTimeout(() => {
            setState(false);
        }, 100);
    }
    function closeDropdown(setState) {
        setState(false);
    }

    function handleMouseEnter(setState, useRef) {
        clearTimeout(useRef.current);
        setMovesidebar(false);
        setState(true);
    }

    const handleTranslateClick = () => {
        setTranslateDropdownOpen((prev) => !prev);
        setMovesidebar(false);
        setOpenPorfileDropdown(false);
    };

    const handleProfileClick = () => {
        setOpenPorfileDropdown((prev) => !prev);
        setTranslateDropdownOpen(false);
        setMovesidebar(false);
    };

    return (
        <div className="w-full h-16 z-[99] top-0 left-0 fixed flex justify-between items-center bg-white border ">
            <div className="flex justify-center items-center h-full ">
                <div
                    onClick={() => {
                        toggleSidebar();
                    }}
                    className="block  lg:hidden ml-5 cursor-pointer">
                    <MenuIcon style={{ fontSize: 24 }} />
                </div>
                <img
                    src={logo}
                    className="w-[100px] py-20 lg:ml-5 ml-3"
                    alt=""
                />
            </div>
            <div className=" flex justify-center hidden  h-full lg:flex lg:items-center ">
                <p
                    className="w-full  bg-white text-gray-700 rounded-lg transition-all duration-200
                hover:text-gray-900 focus:outline-none ">
                    <div className=" relative w-full mr-20 ">
                        <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                            <span className="justify-center items-center flex">
                                <span className="justify-center items-center flex">
                                    <span className="items-center justify-center flex">
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            viewbox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </span>
                        </p>
                        <span>
                            <input
                                placeholder="Chercher Un "
                                type="search"
                                className="  border  sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2 focus:outline-none"
                                readOnly
                            />
                            <span
                                onMouseEnter={() => {
                                    handleMouseEnter(
                                        setColisDropDownOpen,
                                        colisRef
                                    );
                                    setMovesidebar(false);
                                }}
                                onMouseLeave={() => {
                                    handleDropdownMouseLeave(
                                        setColisDropDownOpen,
                                        colisRef
                                    );
                                    setMovesidebar(false);
                                }}
                                className="cursor-pointer absolute right-0 h-full rounded-lg w-22  ">
                                <div className="h-full flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-between border h-full bg-gray-50 rounded-r-lg">
                                        <span className="px-1 pl-2">Colis</span>
                                        <KeyboardArrowDownRoundedIcon />
                                    </div>
                                </div>
                            </span>
                        </span>
                    </div>
                </p>
                {colisDropDownOpen && (
                    <div
                        onMouseEnter={() =>
                            handleMouseEnter(setColisDropDownOpen, colisRef)
                        }
                        onMouseLeave={() =>
                            handleDropdownMouseLeave(
                                setColisDropDownOpen,
                                colisRef
                            )
                        }
                        className="absolute h-auto right-0 bg-white  w-[300px] top-[70px] flex flex-col bg-white   shadow">
                        <div className="bg-white border shadow-md w-50 h-28 fixed z-60 top-16 right-[45%] rounded-lg">
                            <div className="flex flex-col justify-center items-center gap-4 p-3 h-full">
                                <Link
                                    to=""
                                    className="flex items-center justify-start w-full gap-4 px-4">
                                    <Inventory2OutlinedIcon />
                                    <span>Colis</span>
                                </Link>
                                <Link
                                    to=""
                                    className="flex items-center justify-start w-full gap-4 px-4">
                                    <LocalShippingOutlinedIcon />
                                    <span>Transporteur</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-center items-center  gap-2  mr-5">
                <div className="relative">
                    <button
                        onClick={handleTranslateClick}
                        className="flex items-center space-x-3 border rounded-lg bg-gray-50  p-2">
                        <TranslateOutlinedIcon
                            style={{ fontSize: 24, color: "#000000" }}
                        />
                    </button>
                </div>
                <div className="relative">
                    <button className="flex items-center space-x-3 border rounded-lg bg-gray-50  p-2 ">
                        <Link to="/Support">
                            <SupportAgentOutlinedIcon
                                style={{ fontSize: 24, color: "#000000" }}
                            />
                        </Link>
                    </button>
                </div>
                <div className="relative lg:block hidden">
                    <Link to="/messages">
                        {messagenoti && (
                            <div className="w-2 top-2 left-6 h-2 rounded-full bg-yellow-500 absolute animate-ping"></div>
                        )}

                        <button
                            onMouseEnter={() => setSearchDropdownOpen(true)}
                            onMouseLeave={() =>
                                setTimeout(
                                    () =>
                                        !searchDropdownOpen
                                            ? setSearchDropdownOpen(false)
                                            : null,
                                    200
                                )
                            }
                            className="flex items-center space-x-3 border rounded-lg bg-gray-50  p-2 ">
                            <AiOutlineMessage
                                style={{ fontSize: 24, color: "#000000" }}
                            />
                        </button>
                    </Link>
                </div>
                <div className="relative">
                    <Link to="/faq">
                        <button className="flex items-center space-x-3 border rounded-lg bg-gray-50  p-2 ">
                            <HelpOutlineOutlinedIcon
                                style={{ fontSize: 24, color: "#000000" }}
                            />
                        </button>
                    </Link>
                </div>
                <div className="relative">
                    <button
                        id="dropdownAvatarNameButton"
                        className="flex items-center gap-3 text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                        type="button"
                        onClick={handleProfileClick}>
                        <span className="sr-only">Open user menu</span>
                        <VscAccount
                            style={{ fontSize: 24, color: "#000000" }}
                        />
                        Bonnie Green
                        <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nnavbar;
