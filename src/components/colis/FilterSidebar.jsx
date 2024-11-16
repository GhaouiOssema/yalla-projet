import { Minus, Plus } from "lucide-react";
import React from "react";

const FilterSidebar = ({
    selectedCategory,
    setSelectedCategory,
    weightRange,
    setWeightRange,
    detourDistance,
    setDetourDistance,
    handleDetourDistanceChange,
    deliveryDateType,
    setDeliveryDateType,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedSizes = [], // Default empty array if undefined
    priceRange,
    setPriceRange,
    selectedManutentionTypes = [], // Default empty array if undefined
    handleCheckboxChange,
    setSelectedSizes,
}) => {
    const handleSizeChange = (size) => {
        setSelectedSizes(
            (prevSelectedSizes) =>
                prevSelectedSizes.includes(size)
                    ? prevSelectedSizes.filter((s) => s !== size) // Remove size if already selected
                    : [...prevSelectedSizes, size] // Add size if not already selected
        );
    };

    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-medium mb-3">Catégorie</h3>
                <select
                    className="w-full p-2 border rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Choisir une catégorie</option>
                    <option value="électronique">Électronique</option>
                    <option value="vêtements">Vêtements</option>
                    <option value="mobilier">Mobilier</option>
                    <option value="livres">Livres</option>
                    <option value="alimentation">
                        Alimentation & Boissons
                    </option>
                    <option value="jouets">Jouets & Jeux</option>
                    <option value="equipement-sportif">
                        Équipement Sportif
                    </option>
                </select>
            </div>

            <div>
                <h3 className="font-medium mb-3">Format</h3>
                <div className="space-y-2">
                    {["S", "M", "L", "XL", "2XL"].map((size) => (
                        <label key={size} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="appearance-none w-6 h-6 border border-gray-300 rounded checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                                checked={selectedSizes?.includes(size)} // Control the checkbox state
                                onChange={() => handleSizeChange(size)} // Update state on change
                            />
                            <span>{size}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3">Plage de poids (kg)</h3>
                <div className="flex gap-2">
                    {/* Minimum Weight */}
                    <div className="relative w-1/2">
                        <input
                            type="number"
                            placeholder="Min"
                            value={weightRange?.min}
                            onChange={(e) =>
                                setWeightRange({
                                    ...weightRange,
                                    min: e.target.value,
                                })
                            }
                            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-center custom-number-input"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setWeightRange({
                                    ...weightRange,
                                    min: Number(weightRange.min || 0) + 1,
                                })
                            }
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-base p-1 rounded-full hover:bg-gray-100">
                            +
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                setWeightRange({
                                    ...weightRange,
                                    min: Math.max(
                                        Number(weightRange.min || 0) - 1,
                                        0
                                    ),
                                })
                            }
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-base p-1 rounded-full hover:bg-gray-100">
                            -
                        </button>
                    </div>

                    {/* Maximum Weight */}
                    <div className="relative w-1/2">
                        <input
                            type="number"
                            placeholder="Max"
                            value={weightRange?.max}
                            onChange={(e) =>
                                setWeightRange({
                                    ...weightRange,
                                    max: e.target.value,
                                })
                            }
                            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-center custom-number-input"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setWeightRange({
                                    ...weightRange,
                                    max: Number(weightRange.max || 0) + 1,
                                })
                            }
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-base p-1 rounded-full hover:bg-gray-100">
                            +
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                setWeightRange({
                                    ...weightRange,
                                    max: Math.max(
                                        Number(weightRange.max || 0) - 1,
                                        0
                                    ),
                                })
                            }
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-base p-1 rounded-full hover:bg-gray-100">
                            -
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3">Plage de prix (€)</h3>
                <div>
                    <h3 className="font-medium mb-3">Plage de prix (Dinar)</h3>
                    <div className="flex gap-2">
                        {/* Minimum Price */}
                        <div className="relative w-1/2">
                            <input
                                type="number"
                                placeholder="Min"
                                value={priceRange?.min}
                                onChange={(e) =>
                                    setPriceRange({
                                        ...priceRange,
                                        min: e.target.value,
                                    })
                                }
                                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-center custom-number-input"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setPriceRange({
                                        ...priceRange,
                                        min: Number(priceRange.min || 0) + 1,
                                    })
                                }
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-base p-1 rounded-full hover:bg-gray-100">
                                +
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    setPriceRange({
                                        ...priceRange,
                                        min: Math.max(
                                            Number(priceRange.min || 0) - 1,
                                            0
                                        ),
                                    })
                                }
                                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-base p-1 rounded-full hover:bg-gray-100">
                                -
                            </button>
                        </div>

                        {/* Maximum Price */}
                        <div className="relative w-1/2">
                            <input
                                type="number"
                                placeholder="Max"
                                value={priceRange?.max}
                                onChange={(e) =>
                                    setPriceRange({
                                        ...priceRange,
                                        max: e.target.value,
                                    })
                                }
                                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-center custom-number-input"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setPriceRange({
                                        ...priceRange,
                                        max: Number(priceRange.max || 0) + 1,
                                    })
                                }
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-base p-1 rounded-full hover:bg-gray-100">
                                +
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    setPriceRange({
                                        ...priceRange,
                                        max: Math.max(
                                            Number(priceRange.max || 0) - 1,
                                            0
                                        ),
                                    })
                                }
                                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-base p-1 rounded-full hover:bg-gray-100">
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3">Détour maximum</h3>
                <div className="space-y-2">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() =>
                                    setDetourDistance(
                                        Math.max(0, detourDistance - 5)
                                    )
                                }
                                className="p-1 bg-yellow-500 text-white rounded-full hover:bg-gray-100 transition-colors">
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-sm font-medium">
                                {detourDistance} km
                            </span>
                            <button
                                onClick={() =>
                                    setDetourDistance(
                                        Math.min(300, detourDistance + 5)
                                    )
                                }
                                className="p-1 bg-yellow-500 text-white rounded-full hover:bg-gray-100 transition-colors">
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="300"
                            step="5"
                            value={detourDistance}
                            onChange={handleDetourDistanceChange}
                            className="w-full accent-yellow-500 bg-gray-100"
                        />
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">0 km</span>
                            <span className="text-sm text-gray-500">
                                300 km
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3">À livrer</h3>
                <div className="space-y-2">
                    <div>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="deliveryDate"
                                value="before"
                                checked={deliveryDateType === "before"}
                                onChange={(e) =>
                                    setDeliveryDateType(e.target.value)
                                }
                                className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                            />
                            <span>Avant le</span>
                        </label>
                        {deliveryDateType === "before" && (
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full mt-2 p-2 border rounded-md"
                            />
                        )}
                    </div>
                    <div>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="deliveryDate"
                                value="on"
                                checked={deliveryDateType === "on"}
                                onChange={(e) =>
                                    setDeliveryDateType(e.target.value)
                                }
                                className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                            />
                            <span>À livrer le</span>
                        </label>
                        {deliveryDateType === "on" && (
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full mt-2 p-2 border rounded-md"
                            />
                        )}
                    </div>
                    <div>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="deliveryDate"
                                value="between"
                                checked={deliveryDateType === "between"}
                                onChange={(e) =>
                                    setDeliveryDateType(e.target.value)
                                }
                                className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                            />
                            <span>Entre le et le</span>
                        </label>
                        {deliveryDateType === "between" && (
                            <div className="mt-2 space-y-2">
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                    className="w-full p-2 border rounded-md"
                                />
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3">Type de manutention</h3>
                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selectedManutentionTypes?.includes(
                                "Au pied du véhicule"
                            )}
                            onChange={(e) =>
                                handleCheckboxChange(e, "Au pied du véhicule")
                            }
                            className="appearance-none w-6 h-6 border border-gray-300 rounded checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                        />
                        <span>Au pied du véhicule</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selectedManutentionTypes?.includes(
                                "Manutention - 1 personne"
                            )}
                            onChange={(e) =>
                                handleCheckboxChange(
                                    e,
                                    "Manutention - 1 personne"
                                )
                            }
                            className="appearance-none w-6 h-6 border border-gray-300 rounded checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                        />
                        <span>Manutention - 1 personne</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            checked={selectedManutentionTypes?.includes(
                                "Manutention - 2 personnes"
                            )}
                            onChange={(e) =>
                                handleCheckboxChange(
                                    e,
                                    "Manutention - 2 personnes"
                                )
                            }
                            type="checkbox"
                            className="appearance-none w-6 h-6 border border-gray-300 rounded checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                        />
                        <span>Manutention - 2 personnes</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
