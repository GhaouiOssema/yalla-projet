import {
    Repeat,
    FilePenLine,
    Trash2,
    Package,
    ArrowDown,
    ArrowDownUp,
    ArrowDownToDot,
    User,
    Calendar,
    Ruler,
    Layers3,
} from "lucide-react";
import React from "react";
import { DateBadge } from "../../components";
import { Link } from "react-router-dom";

const LivraisonsCard = ({
    id,
    setIsOpen,
    adresse,
    photo,
    title,
    etat,
    prix,
    isRegular,
    maxPackageSize,
    arrival,
    departure,
    deliveryDate,
    receiverName,
}) => {
    return (
        <div key={id} className="w-full bg-white rounded-lg  p-3">
            <div className="w-full relative">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Link
                            to={`/mes-annonces/${title}/${id}`}
                            className=" hidden sm:block p-2 md:flex justify-center items-center ">
                            <img
                                src={photo}
                                alt={`Livraison pour ${adresse}`}
                                className="hiddem md:flex w-auto h-40 object-contain rounded-lg"
                            />
                        </Link>
                        <div className="h-full w-full flex flex-col gap-4 ">
                            <div className=" flex items-center justify-between">
                                <div className="text-lg font-semibold text-primary">
                                    {title}
                                </div>
                                <div>
                                    {etat === "En discussion" ? (
                                        <span className=" bg-gray-400 text-white text-xs py-1 px-2 rounded-full">
                                            En discussion
                                        </span>
                                    ) : etat === "Termineé" ? (
                                        <span className="bg-green-500 text-white text-xs py-1 px-2 rounded-full">
                                            Termineé
                                        </span>
                                    ) : etat === "En livraison" ? (
                                        <span className="bg-yellow-500 text-white text-xs py-1 px-2 rounded-full">
                                            En livraison
                                        </span>
                                    ) : etat === "Annulée" ? (
                                        <span className="bg-red-500 text-white text-xs py-1 px-2 rounded-full">
                                            Annulée
                                        </span>
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className=" sm:w-full w-fit flex items-center gap-2 mr-2  overflow-x-auto sm:overflow-x-hidden scrollbar-hide  scrollbar-hide  ">
                                    {isRegular && (
                                        <DateBadge
                                            Icon={Calendar}
                                            date={deliveryDate}
                                            condition="avant"
                                        />
                                    )}

                                    {maxPackageSize && (
                                        <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1 whitespace-nowrap">
                                            <Package className="h-3 w-3" />
                                            {maxPackageSize}
                                        </span>
                                    )}

                                    {receiverName && (
                                        <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1 whitespace-nowrap">
                                            <User className="h-3 w-3" />
                                            Colis de {receiverName}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="relative flex flex-col items-center">
                                    <div className="rounded-full w-4 h-4 bg-gray-500 flex items-center justify-center">
                                        <div className="rounded-full w-3/4 h-3/4 bg-white flex items-center justify-center">
                                            <div className="rounded-full w-1/2 h-1/2 bg-gray-500" />
                                        </div>
                                    </div>
                                    <div
                                        className="flex-1 w-0.5 bg-gray-500"
                                        style={{
                                            height: "calc(100% - 2rem)",
                                        }}
                                    />
                                    <div className="relative rounded-full w-4 h-4 bg-gray-500 flex items-center justify-center">
                                        <div className="rounded-full w-3/4 h-3/4 bg-white flex items-center justify-center">
                                            <div className="rounded-full w-1/2 h-1/2 bg-gray-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-4 space-y-3 flex-1">
                                    <div className="flex items-center">
                                        <span className="text-sm font-medium">
                                            {departure?.postalCode},
                                            {departure?.country},
                                            {departure?.city}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-sm font-medium">
                                            {arrival?.postalCode},
                                            {arrival?.country},{arrival?.city}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between ">
                                <div className="flex items-center justify-start gap-2 text-sm">
                                    <span className="text-base font-bold">
                                        {prix}€
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full p-2">
                                        <FilePenLine className="w-5 h-5" />
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-600 p-2"
                                        onClick={() => setIsOpen(true)}>
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LivraisonsCard;
