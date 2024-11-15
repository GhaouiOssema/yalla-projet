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
}) => {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-medium mb-3">Catégorie</h3>
                <select
                    className="w-full p-2 border rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Sélectionner une catégorie</option>
                    <option value="electronics">Électronique</option>
                    <option value="clothing">Vêtements</option>
                    <option value="furniture">Meubles</option>
                    <option value="books">Livres</option>
                    <option value="food">Alimentation & Boissons</option>
                    <option value="toys">Jouets & Jeux</option>
                    <option value="sports">Équipement sportif</option>
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
                            />
                            <span>{size}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3">Plage de poids (kg)</h3>
                <div className="flex gap-2">
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
                        className="w-1/2 p-2 border rounded-md"
                    />
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
                        className="w-1/2 p-2 border rounded-md"
                    />
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3">Plage de prix (€)</h3>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Min"
                        className="w-1/2 p-2 border rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        className="w-1/2 p-2 border rounded-md"
                    />
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
                                className="p-1 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors">
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
                                className="p-1 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors">
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
                            className="appearance-none w-6 h-6 border border-gray-300 rounded checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                        />
                        <span>Au pied du véhicule</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="appearance-none w-6 h-6 border border-gray-300 rounded checked:bg-yellow-500 checked:border-yellow-500 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                        />
                        <span>Manutention - 1 personne</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
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
