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
} from "lucide-react";
import React from "react";

const LivraisonsCard = ({
    id,
    schedule,
    vehicleType,
    isRegular,
    maxPackageSize,
    isActive,
    departure,
    status,
    stops,
    arrival,
    price,
    allerRetour,
    receiverName,
}) => {
    return (
        <div key={id} className="w-full bg-white rounded-lg border p-6 mb-4">
            <div className="w-full relative">
                <div className="pb-3">
                    <div className="text-lg font-semibold text-primary">
                        {schedule} - {vehicleType}
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            {receiverName && (
                                <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {receiverName}
                                </span>
                            )}

                            {receiverName && (
                                <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    {receiverName}
                                </span>
                            )}
                        </div>
                        {status === "livré" ? (
                            <span className="bg-emerald-500 text-white text-xs py-1 px-2 rounded-full">
                                Livré
                            </span>
                        ) : status === "En cours" ? (
                            <span className="bg-yellow-500 text-white text-xs py-1 px-2 rounded-full">
                                En cours
                            </span>
                        ) : null}
                    </div>
                    <div className="flex">
                        <div className="relative flex flex-col items-center">
                            <div className="rounded-full w-4 h-4 bg-gray-500 flex items-center justify-center">
                                <div className="rounded-full w-3/4 h-3/4 bg-white flex items-center justify-center">
                                    <div className="rounded-full w-1/2 h-1/2 bg-gray-500" />
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 space-y-3 flex-1">
                            <div className="flex items-center">
                                <span className="text-sm font-medium">
                                    {departure.postalCode}, {departure.city},{" "}
                                    {departure.country}
                                </span>
                            </div>
                            {stops > 0 && (
                                <div className="text-sm text-muted-foreground ml-4">
                                    Via {stops} étape
                                    {stops > 1 ? "s" : ""}
                                </div>
                            )}
                            {/* <div className="flex items-center">
                                <span className="text-sm font-medium">
                                    {arrival.postalCode}, {arrival.city},{" "}
                                    {arrival.country}
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-4 flex space-x-2">
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
    );
};

export default LivraisonsCard;
