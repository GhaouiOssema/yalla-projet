import { useState, useRef, useEffect } from "react";
import { MapPin, Plus, X, Filter } from "lucide-react";
import { FilterCard, FilterSidebar, MonTrajetList } from "../components";

export default function PackageListingDelivery() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [weightRange, setWeightRange] = useState({ min: "", max: "" });
    const [routeType, setRouteType] = useState("around");
    const [city, setCity] = useState("");
    const [radius, setRadius] = useState(10);
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [stops, setStops] = useState([]);
    const [detourDistance, setDetourDistance] = useState(0);
    const [deliveryDateType, setDeliveryDateType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef(null);
    const [cartData, setCartData] = useState([
        {
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOyWHuKfjjud0QNsrNJ1YTjgLOwG3-MJ5DlnwEXcH-j7ZSvoFJyCLfgz5Br4H7Eqn96o&usqp=CAU",
            postedTime: "1 hour ago",
            discussions: 12,
            title: "Large Electronics Package",
            weight: "15 kg",
            distance: "500 km",
            price: "$150",
            description:
                "Large package containing various electronic items. Requires careful handling and temperature-controlled environment...",
            tags: ["Electronics", "Fragile", "Express Delivery"],
        },
        {
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOyWHuKfjjud0QNsrNJ1YTjgLOwG3-MJ5DlnwEXcH-j7ZSvoFJyCLfgz5Br4H7Eqn96o&usqp=CAU",
            postedTime: "3 hours ago",
            discussions: 8,
            title: "Small Document Package",
            weight: "1 kg",
            distance: "100 km",
            price: "$30",
            description:
                "Contains important documents. Needs to be delivered urgently.",
            tags: ["Documents", "Urgent"],
        },
        // Add more card data objects as needed
    ]);

    const handleAddStop = () => {
        if (stops.length < 5) {
            setStops([...stops, ""]);
        }
    };

    const handleStopChange = (index, value) => {
        const newStops = [...stops];
        newStops[index] = value;
        setStops(newStops);
    };

    const handleDeleteStop = (index) => {
        const newStops = stops.filter((_, i) => i !== index);
        setStops(newStops);
    };

    const handleRadiusChange = (increment) => {
        setRadius((prevRadius) => Math.max(0, prevRadius + increment));
    };

    const handleDetourDistanceChange = (e) => {
        const value = parseInt(e.target.value);
        setDetourDistance(value);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                filterRef.current &&
                !filterRef.current.contains(event.target)
            ) {
                setIsFilterOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-center w-full ">
            <div className="min-h-screen bg-white ">
                {/* Search Header */}
                <div className="border-b ">
                    <div className="w-full px-6 py-8">
                        <h1 className="text-xl font-semibold text-gray-900 mb-6 ">
                            Transportez des colis sur votre trajet
                        </h1>

                        <div className="flex gap-12 mb-6 ">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="routeType"
                                        value="around"
                                        checked={routeType === "around"}
                                        onChange={() => setRouteType("around")}
                                        className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-500 hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 ${
                                            routeType === "around"
                                                ? "border-yellow-500"
                                                : "border-gray-300"
                                        }`}>
                                        {routeType === "around" && (
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        )}
                                    </div>
                                </div>
                                <span className="text-gray-700">Autour de</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="routeType"
                                        value="route"
                                        checked={routeType === "route"}
                                        onChange={() => setRouteType("route")}
                                        className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-500 hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 ${
                                            routeType === "route"
                                                ? "border-yellow-500"
                                                : "border-gray-300"
                                        }`}>
                                        {routeType === "route" && (
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        )}
                                    </div>
                                </div>
                                <span className="text-gray-700">
                                    Sur mon trajet
                                </span>
                            </label>
                        </div>

                        <div className="space-y-3 ">
                            {routeType === "around" ? (
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Indiquer une ville, un lieu..."
                                        value={city}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                        className="w-full pl-12 pr-4 py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Ville de départ"
                                            value={departure}
                                            onChange={(e) =>
                                                setDeparture(e.target.value)
                                            }
                                            className="w-full pl-12 pr-4 py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
                                        />
                                    </div>
                                    {stops.map((stop, idx) => (
                                        <MonTrajetList
                                            key={idx}
                                            idx={idx}
                                            handleStopChange={handleStopChange}
                                            handleDeleteStop={handleDeleteStop}
                                        />
                                    ))}
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Ville d'arrivée"
                                            value={arrival}
                                            onChange={(e) =>
                                                setArrival(e.target.value)
                                            }
                                            className="w-full pl-12 pr-4 py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
                                        />
                                    </div>
                                    {stops.length < 5 && (
                                        <button
                                            onClick={handleAddStop}
                                            className="flex items-center gap-2 text-yellow-500 hover:text-yellow-600 transition-colors pl-4">
                                            <Plus className="h-4 w-4" />
                                            <span>Ajouter une étape</span>
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 ">
                        {/* Filters Sidebar for Desktop */}
                        <div className="hidden md:block">
                            <FilterSidebar
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                weightRange={weightRange}
                                setWeightRange={setWeightRange}
                                routeType={routeType}
                                setRouteType={setRouteType}
                                city={city}
                                setCity={setCity}
                                radius={radius}
                                setRadius={setRadius}
                                departure={departure}
                                setDeparture={setDeparture}
                                arrival={arrival}
                                setArrival={setArrival}
                                stops={stops}
                                setStops={setStops}
                                detourDistance={detourDistance}
                                setDetourDistance={setDetourDistance}
                                deliveryDateType={deliveryDateType}
                                setDeliveryDateType={setDeliveryDateType}
                                startDate={startDate}
                                setStartDate={setStartDate}
                                endDate={endDate}
                                setEndDate={setEndDate}
                                handleAddStop={handleAddStop}
                                handleStopChange={handleStopChange}
                                handleDeleteStop={handleDeleteStop}
                                handleRadiusChange={handleRadiusChange}
                                handleDetourDistanceChange={
                                    handleDetourDistanceChange
                                }
                                filterRef={filterRef}
                            />
                        </div>

                        {/* Filter Button and Overlay for Mobile */}
                        <div className="md:hidden mb-4">
                            <button
                                className="w-full px-4 h-12 bg-gray-50 text-base border rounded-full flex items-center justify-center font-semibold hover:bg-gray-100 transition-colors"
                                onClick={() => setIsFilterOpen(!isFilterOpen)}>
                                <Filter className="mr-2 h-5 w-5" />
                                Filtrer
                            </button>
                            {isFilterOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
                                    <div
                                        ref={filterRef}
                                        className="bg-white w-full h-[80vh] rounded-t-lg p-4 pb-6 overflow-y-auto">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-lg font-semibold">
                                                Filters
                                            </h2>
                                            <button
                                                onClick={() =>
                                                    setIsFilterOpen(false)
                                                }>
                                                <X className="h-6 w-6" />
                                            </button>
                                        </div>
                                        <FilterSidebar />
                                        <div className="flex gap-2 mt-4">
                                            <button
                                                className="flex-1 px-4 h-10 bg-yellow-500 text-white text-base rounded-full font-semibold hover:bg-yellow-600 transition-colors"
                                                onClick={() =>
                                                    setIsFilterOpen(false)
                                                }>
                                                Appliquer les filtres
                                            </button>
                                            <button
                                                className="px-4 h-10 bg-gray-50 text-base border rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                                onClick={() => {
                                                    // Add logic to reset filters here
                                                    setIsFilterOpen(false);
                                                }}>
                                                Restaurer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Package Listings */}
                        <div className="space-y-4">
                            {cartData.map((item, idx) => (
                                <FilterCard key={idx} data={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
