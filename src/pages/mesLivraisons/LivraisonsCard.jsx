import {
    Package,
    User,
    Calendar,
    Send,
    MessageCircleMore,
    MoveRight,
} from "lucide-react";
import React from "react";
import { DateBadge, StatusBadges, CustomeBadge } from "../../components";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

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
                                        <StatusBadges
                                            text={etat}
                                            className="bg-gray-400"
                                        />
                                    ) : etat === "Termineé" ? (
                                        <StatusBadges
                                            text={etat}
                                            className="bg-green-500"
                                        />
                                    ) : etat === "En livraison" ? (
                                        <StatusBadges
                                            text={etat}
                                            className="bg-yellow-500"
                                        />
                                    ) : etat === "Annulée" ? (
                                        <StatusBadges
                                            text={etat}
                                            className="bg-red-500"
                                        />
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
                                        <CustomeBadge
                                            text={maxPackageSize}
                                            Icon={Package}
                                        />
                                    )}

                                    {receiverName && (
                                        <CustomeBadge
                                            text={`Colis de ${receiverName}`}
                                            Icon={User}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="relative flex flex-col items-center">
                                    <div className="rounded-full w-4 h-4 bg-yellow-500 flex items-center justify-center">
                                        <div className="rounded-full w-3/4 h-3/4 bg-white flex items-center justify-center">
                                            <div className="rounded-full w-1/2 h-1/2 bg-yellow-500" />
                                        </div>
                                    </div>
                                    <div
                                        className="flex-1 w-0.5 bg-yellow-500"
                                        style={{
                                            height: "calc(100% - 2rem)",
                                        }}
                                    />
                                    <div className="relative rounded-full w-4 h-4 bg-yellow-500 flex items-center justify-center">
                                        <div className="rounded-full w-3/4 h-3/4 bg-white flex items-center justify-center">
                                            <div className="rounded-full w-1/2 h-1/2 bg-yellow-500" />
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

                                <div className="flex items-center space-x-2 cursor-pointer ">
                                    
                                    
                                    <MoveRight className="w-8 h-8  mr-3 text-yellow-500  hover:text-yellow-600" />
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
