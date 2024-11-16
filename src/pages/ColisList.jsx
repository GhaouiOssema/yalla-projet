import { useState, useRef, useEffect } from "react";
import { MapPin, Plus, X, Filter } from "lucide-react";
import { FilterCard, FilterSidebar, MonTrajetList } from "../components";
import axios from "axios";
import { cartData } from "../utils/Data";

export default function PackageListingDelivery() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [weightRange, setWeightRange] = useState({ min: "", max: "" });
    const [priceRange, setPriceRange] = useState({ min: "", max: "" });
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
    const [selectedSizes, setSelectedSizes] = useState([]);
    // const [cartData, setCartData] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [selectedManutentionTypes, setSelectedManutentionTypes] = useState(
        []
    );

    // useEffect(() => {
    //     fetchData();
    // }, [livraisons]);

    const handleSizeChange = (size) => {
        setSelectedSizes(
            (prevSelectedSizes) =>
                prevSelectedSizes.includes(size)
                    ? prevSelectedSizes.filter((s) => s !== size) // Remove size if already selected
                    : [...prevSelectedSizes, size] // Add size if not already selected
        );
    };

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

    const filteredData = cartData.filter((item) => {
        const cityMatch = city
            ? [
                  item.departure.city,
                  item.departure.country,
                  item.departure.postalCode,
              ]
                  .map((field) => field.toLowerCase())
                  .some((field) => field.includes(city.toLowerCase()))
            : true;

        const tagMatch = selectedCategory
            ? item.tags.some(
                  (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
              )
            : true;

        const sizeMatch =
            selectedSizes.length > 0
                ? (Array.isArray(item.size) ? item.size : [item.size]).some(
                      (size) => selectedSizes.includes(size)
                  )
                : true;

        // Handle weight range filter (min and max)
        const weight = parseFloat(item.weight.split(" ")[0]); // Assuming weight is a string like "15 kg"
        const weightMinMatch = weightRange?.min
            ? weight >= parseFloat(weightRange.min)
            : true; // If min is set, check if weight is greater than or equal to min

        const weightMaxMatch = weightRange?.max
            ? weight <= parseFloat(weightRange.max)
            : true; // If max is set, check if weight is less than or equal to max

        const price = parseFloat(item.price); // Assuming item.price is a number or string like "20"
        const priceMinMatch = priceRange.min
            ? price >= parseFloat(priceRange.min)
            : true; // If min is set, check if price is greater than or equal to min

        const priceMaxMatch = priceRange.max
            ? price <= parseFloat(priceRange.max)
            : true;

        const detourMatch =
            item.distance <= detourDistance || detourDistance === 0;

        const manutentionMatch =
            (selectedManutentionTypes.includes("Au pied du véhicule") &&
                item.manutentionType === "Au pied du véhicule") ||
            (selectedManutentionTypes.includes("Manutention - 1 personne") &&
                item.manutentionType === "Manutention - 1 personne") ||
            (selectedManutentionTypes.includes("Manutention - 2 personnes") &&
                item.manutentionType === "Manutention - 2 personnes") ||
            selectedManutentionTypes.length === 0;

        return (
            cityMatch &&
            tagMatch &&
            sizeMatch &&
            weightMinMatch &&
            weightMaxMatch &&
            priceMinMatch &&
            priceMaxMatch &&
            detourMatch &&
            manutentionMatch
        );
    });

    const handleCheckboxChange = (e, type) => {
        setSelectedManutentionTypes(
            (prev) =>
                e.target.checked
                    ? [...prev, type] // Add type if checked
                    : prev.filter((item) => item !== type) // Remove type if unchecked
        );
    };

    return (
        <div className="px-0 lg:px-20 w-full ">
            <div className="h-full bg-white ">
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
                                        placeholder="Indiquer une ville, un lieu ou une code postal"
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

                <div className=" px-4 py-6">
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
                                selectedSizes={selectedSizes}
                                handleSizeChange={handleSizeChange}
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                                selectedManutentionTypes={
                                    selectedManutentionTypes
                                }
                                handleCheckboxChange={handleCheckboxChange}
                                setSelectedSizes={setSelectedSizes}
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
                                        <FilterSidebar
                                            selectedCategory={selectedCategory}
                                            setSelectedCategory={
                                                setSelectedCategory
                                            }
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
                                            setDetourDistance={
                                                setDetourDistance
                                            }
                                            deliveryDateType={deliveryDateType}
                                            setDeliveryDateType={
                                                setDeliveryDateType
                                            }
                                            startDate={startDate}
                                            setStartDate={setStartDate}
                                            endDate={endDate}
                                            setEndDate={setEndDate}
                                            handleAddStop={handleAddStop}
                                            handleStopChange={handleStopChange}
                                            handleDeleteStop={handleDeleteStop}
                                            handleRadiusChange={
                                                handleRadiusChange
                                            }
                                            handleDetourDistanceChange={
                                                handleDetourDistanceChange
                                            }
                                            filterRef={filterRef}
                                            selectedSizes={selectedSizes}
                                            handleSizeChange={handleSizeChange}
                                            priceRange={priceRange}
                                            setPriceRange={setPriceRange}
                                            selectedManutentionTypes={
                                                selectedManutentionTypes
                                            }
                                            handleCheckboxChange={
                                                handleCheckboxChange
                                            }
                                            setSelectedSizes={setSelectedSizes}
                                        />
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
                            {filteredData.length > 0 ? (
                                filteredData.map((item, idx) => (
                                    <FilterCard key={idx} data={item} />
                                ))
                            ) : (
                                <div className="text-center text-gray-500 w-full">
                                    <div className="w-full max-w-[your-card-width] mx-auto">
                                        Aucun résultat trouvé
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
