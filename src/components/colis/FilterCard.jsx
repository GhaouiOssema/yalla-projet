import { Heart, Package, Truck } from "lucide-react";
import DateBadge from "../badges/DateBadge";
import StatusBadges from "../badges/StatusBadges";

const FilterCard = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-lg border">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 hidden sm:block">
                    <img
                        src={data.imageUrl}
                        alt="Package image"
                        width={120}
                        height={120}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div>
                            <div className="flex justify-between items-center w-full mb-2">
                                <span className="text-xs text-gray-500">
                                    Posted {data.postedTime}
                                </span>
                                <span className="text-xs font-medium text-yellow-500">
                                    {data.discussions} discussions
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">
                                {data.title}{" "}
                                <DateBadge
                                    date={data.date}
                                    Icon={Package}
                                    condition={data.dateCondition}
                                />
                                <StatusBadges
                                    text={data.manutentionType}
                                    className="bg-red-600"
                                />
                            </h2>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                        <Package className="h-4 w-4" />{" "}
                                        {data.weight}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Truck className="h-4 w-4" />{" "}
                                        {data.distance}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        {data.price}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                {data.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {data.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2 sm:flex-col">
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                                <Heart className="h-5 w-5 text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;
