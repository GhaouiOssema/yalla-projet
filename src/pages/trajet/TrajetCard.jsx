import {
    Repeat,
    FilePenLine,
    Trash2,
    Package,
    ArrowDown,
    ArrowDownUp,
    ArrowDownToDot,
} from "lucide-react";
import React from "react";

const TrajetCard = ({
    id,
    schedule,
    vehicleType,
    isRegular,
    maxPackageSize,
    isActive,
    departure,
    stops,
    arrival,
    price,
    allerRetour,
    setIsOpen,
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
                            {isRegular ? (
                                <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1">
                                    <Repeat className="h-3 w-3" /> Trajet
                                    régulier
                                </span>
                            ) : (
                                <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1">
                                    <ArrowDown className="h-3 w-3" /> Trajet
                                    unique
                                </span>
                            )}

                            {allerRetour ? (
                                <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1">
                                    <ArrowDownUp className="h-3 w-3" /> Aller -
                                    Retour
                                </span>
                            ) : (
                                <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1">
                                    <ArrowDownToDot className="h-3 w-3" />
                                    Aller
                                </span>
                            )}

                            {maxPackageSize && (
                                <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1">
                                    <Package className="h-3 w-3" /> Max:{" "}
                                    {maxPackageSize}
                                </span>
                            )}
                        </div>
                        {isActive && (
                            <span className="bg-emerald-500 text-white text-xs py-1 px-2 rounded-full">
                                Active
                            </span>
                        )}
                    </div>
                    <div className="flex">
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
                            <div className="flex items-center">
                                <span className="text-sm font-medium">
                                    {arrival.postalCode}, {arrival.city},{" "}
                                    {arrival.country}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <div className="text-sm">
                            A partir de :{" "}
                            <span className="font-semibold">{price}€</span>
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

export default TrajetCard;
