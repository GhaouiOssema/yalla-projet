import {
    Repeat,
    FilePenLine,
    Trash2,
    Package,
    ArrowDown,
    ArrowDownUp,
    ArrowDownToDot,
} from "lucide-react";
import { useRef } from "react";
import {
    CustomeBadge,
    DeleteButtonIcon,
    ModifyButton,
    StatusBadges,
} from "../../components";

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
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
        }
    };
    return (
        <div key={id} className="w-full bg-white rounded-lg border p-3 mb-4">
            <div className="w-full relative">
                <div className="pb-3">
                    <div className="text-lg font-semibold text-primary">
                        {schedule} - {vehicleType}
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div className=" sm:w-full w-fit flex items-center gap-2 mr-2  overflow-x-auto sm:overflow-x-hidden scrollbar-hide  scrollbar-hide  ">
                            {isRegular ? (
                                <CustomeBadge
                                    text={"Trajet régulier"}
                                    Icon={Repeat}
                                />
                            ) : (
                                <CustomeBadge
                                    text={"Trajet unique"}
                                    Icon={ArrowDown}
                                />
                            )}

                            {allerRetour ? (
                                <CustomeBadge
                                    text={"Aller - Retour"}
                                    Icon={ArrowDownUp}
                                />
                            ) : (
                                <CustomeBadge
                                    text={"Aller"}
                                    Icon={ArrowDownToDot}
                                />
                            )}

                            {maxPackageSize && (
                                <CustomeBadge
                                    text={`MAX: ${maxPackageSize}`}
                                    Icon={Package}
                                />
                            )}
                        </div>

                        {isActive && (
                            <StatusBadges
                                text="Active"
                                className="bg-emerald-500"
                            />
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
                    <div className="flex items-center justify-between py-2">
                        <div className="text-sm">
                            A partir de :{" "}
                            <span className="font-semibold">{price}€</span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <ModifyButton Icon={FilePenLine} />
                            <DeleteButtonIcon
                                Icon={Trash2}
                                setIsOpen={setIsOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrajetCard;
