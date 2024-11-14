import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { InternalSideBarLeft, BottomNavBar } from "./components";

import {
  Home,
  FAQ,
  NFCTags,
  HowItWorks,
  NFCBusinessCards,
  Dashboard,
  SearchPackage,
  Setting,
  AddressBook,
  Payments,
  Support,
  Login,
  SignUp,
  Trajet,
  ShareAccount,
  ShareWithFrend,
  Transporteur,
  ColisList,
  Annonces,
} from "./pages";
import { useEffect, useRef, useState } from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Nnavbar from "./components/Nnavbar";
import ProfileMobileView from "./components/ProfileMobileView";
import Messages from "./pages/messages";
import Verify from "./pages/Verify";
import Account from "./pages/Account";
import PersonInfoPage from "./pages/PersoneInfoPage";
import ModifyAccount from "./pages/ModifyAccount";
import MesPayments from "./pages/MesPayments";
import MessagesChat from "./pages/messagesChat";
import AddAnnouncement from "./pages/AddAnnouncement/AddAnnouncement";
import AddRoute from "./pages/AddRoute/AddRoute";

import MesLivraisons from "./pages/mesLivraisons/MesLivraisons";

function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [open, setOpen] = useState(true);
  const [messagenoti, setMessagenoti] = useState(true);
  const [verifynoti, setVerifynoti] = useState(true);
  const [openModalTrans, setOpenModalTrans] = useState(false);
  const [openModalTrans2, setOpenModalTrans2] = useState(false);
  const contentRef = useRef(null);
  const TransRef2 = useRef(null);
  const [movesidebar, setMovesidebar] = useState(false);
  const [translateDropdownOpen, setTranslateDropdownOpen] = useState(false);
  const TranslateRef = useRef(null);
  const [isLogedIn, setIsLogedIn] = useState(true);
  const TransRef = useRef(null);
  const location = useLocation();
  const [openPorfileDropdown, setOpenPorfileDropdown] = useState(false);
  const openPorfileDropdownRef = useRef(null);
  const [hideSideBar, setHideSideBar] = useState(false);

  const toggleSidebar = () => {
    setMovesidebar((prev) => !prev);
    setHideSideBar(false);
  };
  useEffect(() => {
    setMovesidebar(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
      setOpen(false);
      setMovesidebar(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/ajouter-une-annonce") {
      setHideSideBar(true);
    } else if (location.pathname === "/ajouter-un-trajet") {
      setHideSideBar(true);
    } else if (location.pathname === "/colis") {
      setHideSideBar(true);
    } else if (location.pathname === "/transporteur") {
      setHideSideBar(true);
    } else {
      setHideSideBar(false);
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-screen overflow-y-auto   ">
      <div
        className={`absolute transform z-[29] w-full block lg:hidden bg-black h-screen   ${
          movesidebar || openPorfileDropdown || translateDropdownOpen
            ? "opacity-80 "
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-700`}
      ></div>

      <div className="flex flex-col">
        {isLogedIn && (
          <Nnavbar
            setMovesidebar={setMovesidebar}
            messagenoti={messagenoti}
            verifynoti={verifynoti}
            TranslateRef={TranslateRef}
            setTranslateDropdownOpen={setTranslateDropdownOpen}
            translateDropdownOpen={translateDropdownOpen}
            openPorfileDropdownRef={openPorfileDropdownRef}
            setOpenPorfileDropdown={setOpenPorfileDropdown}
            toggleSidebar={toggleSidebar}
          />
        )}

        <div className="flex flex-1 h-full">
          {isLogedIn ? (
            <>
              {!hideSideBar && (
                <InternalSideBarLeft
                  open={open}
                  openPorfileDropdown={openPorfileDropdown}
                  setOpen={setOpen}
                  isMobileView={isMobileView}
                  contentRef={contentRef}
                  movesidebar={movesidebar}
                  setMovesidebar={setMovesidebar}
                  translateDropdownOpen={translateDropdownOpen}
                />
              )}

              <div
                className={`w-full h-full mt-16 mb-10 ${
                  !hideSideBar && "lg:ml-[16rem] xl:ml-[16rem]"
                }`}
                ref={contentRef}
              >
                <div className={`flex w-full h-full`}>
                  <Routes>
                    <Route
                      path="/Dashboard"
                      element={
                        <Dashboard
                          translateDropdownOpen={translateDropdownOpen}
                          openPorfileDropdown={openPorfileDropdown}
                        />
                      }
                    />
                    <Route path="/monprofile" element={<Dashboard />} />

                    <Route path="/messages" element={<Messages />} />
                    <Route path="/Support" element={<Support />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/plaques-nfc" element={<NFCTags />} />
                    <Route path="/comment-ca-marche" element={<HowItWorks />} />
                    <Route
                      path="/cartes-de-visite-nfc"
                      element={<NFCBusinessCards />}
                    />
                    <Route
                      path="/ajouter-une-annonce"
                      element={<AddAnnouncement />}
                    />
                    <Route path="/ajouter-un-trajet" element={<AddRoute />} />
                    <Route
                      path="/chercher-un-colis"
                      element={<SearchPackage />}
                    />
                    <Route path="/mes-livraisons" element={<MesLivraisons />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/paiement" element={<Payments />} />
                    <Route path="/mespayments" element={<MesPayments />} />
                    <Route path="/mes-annonces" element={<Annonces />} />
                    <Route path="/trajets" element={<Trajet />} />
                    <Route path="/carnet-d-adresse" element={<AddressBook />} />
                    <Route path="/verifier" element={<Verify />} />
                    <Route
                      path="/messageschat/:name"
                      element={<MessagesChat />}
                    />
                    <Route path="/account" element={<Account />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/modifyaccount" element={<ModifyAccount />} />
                    <Route
                      path="/compte/partage/publique"
                      element={<ShareAccount />}
                    />
                    <Route
                      path="/parrainage/amie"
                      element={<ShareWithFrend />}
                    />
                    <Route path="/colis" element={<ColisList />} />
                    <Route path="/transporteur" element={<Transporteur />} />
                  </Routes>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full">
              <Routes>
                <Route path="/seconnecter" element={<Login />} />
                <Route path="/inscription" element={<SignUp />} />

                <Route />
              </Routes>
            </div>
          )}
          <ProfileMobileView
            verifynoti={verifynoti}
            setMovesidebar={setMovesidebar}
            TranslateRef={TranslateRef}
            setTranslateDropdownOpen={setTranslateDropdownOpen}
            openPorfileDropdown={openPorfileDropdown}
            translateDropdownOpen={translateDropdownOpen}
            openPorfileDropdownRef={openPorfileDropdownRef}
            setOpenPorfileDropdown={setOpenPorfileDropdown}
          />
        </div>
      </div>
      {isLogedIn && isMobileView && !open && (
        <div className="mt-10">
          <BottomNavBar />
        </div>
      )}
    </div>
  );
}

export default App;
