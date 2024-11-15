import AddRoadIcon from "@mui/icons-material/AddRoad";
import AddIcon from "@mui/icons-material/Add";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import { MdOutlineShare } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineMode } from "react-icons/md";

export const menus = [
    {
        title: "Generale",
    },
    { name: "Dashboard", link: "/dashboard", icon: DashboardOutlinedIcon },
    {
        name: "Mes Livraisons",
        link: "/mes-livraisons",
        icon: IosShareOutlinedIcon,
    },
    {
        name: "Mes Annonces",
        link: "/mes-annonces",
        icon: MarkunreadMailboxOutlinedIcon,
    },
    {
        name: "Mes trajets",
        link: "/trajets",
        icon: ForkRightIcon,
    },
    {
        title: "Mes outils",
    },
    {
        name: "Ajouter une annonce",
        link: "/ajouter-une-annonce",
        icon: AddIcon,
    },
    {
        name: "Crée un trajet",
        link: "/ajouter-un-trajet",
        icon: AddRoadIcon,
    },

    {
        name: "Carnet d'adresse",
        link: "/carnet-d-adresse",
        icon: StickyNote2OutlinedIcon,
    },
    {
        name: "Mes paiements ",
        link: "/mespayments",
        icon: AttachMoneyOutlinedIcon,
    },
];

export const bottomMenu = [
    {
        dataTooltipTarget: "tooltip-home",
        link: "/dashboard",
        type: "button",
        className:
            "inline-flex flex-col items-center justify-center p-6 hover:bg-blue-600 group cursor-pointer",

        svg: {
            w: 26,
            h: 26,
        },
        icon: DashboardOutlinedIcon,
    },
    {
        dataTooltipTarget: "tooltip-bookmark",
        link: "/messages",
        type: "button",
        className:
            "inline-flex flex-col items-center justify-center p-6 hover:bg-blue-600 group cursor-pointer",
        svg: {
            w: 26,
            h: 26,
        },
        icon: ChatBubbleOutlineOutlinedIcon,
    },
    {
        dataTooltipTarget: "tooltip-add",
        type: "button",
        className:
            "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
        svg: {
            w: 32,
            h: 32,
        },
        icon: AddIcon,
    },
    {
        dataTooltipTarget: "tooltip-search",
        link: "chercher-un-colis",
        type: "button",
        className:
            "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
        svg: {
            w: 32,
            h: 32,
        },
        icon: SearchOutlinedIcon,
    },
    {
        dataTooltipTarget: "tooltip-settings",
        link: "",
        type: "button",
        className:
            "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
        svg: {
            w: 32,
            h: 32,
        },
        icon: MoreHorizIcon,
    },
];
export const ProfileMobile = [
    {
        title: "Ajouter un moyen de paiements ",
        icon: FaRegCreditCard,
        link: "/paiement",
    },
    {
        title: "verifier mon compte",
        icon: MdOutlineVerified,
        link: "/verifier",
    },
    {
        title: "Modifier mes informations",
        icon: MdOutlineMode,
        link: "/account",
    },
    {
        title: "Voir mon profil public ",
        icon: BiShow,
        link: "/modifyaccount",
    },
    {
        title: "parrainer un amie",
        icon: IoPersonAddOutline,
        link: "/parrainage/amie",
    },
    {
        title: "partager mon profil",
        icon: MdOutlineShare,
        link: "/compte/partage/publique",
    },
];
