import React, { useState } from "react";
import { ListFilter } from "lucide-react"; // Import ListFilter icon

const Card = ({ name, subname, firstSelectOptions, Options2 }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [dateFilter, setDateFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStatusChange = (event) => {
    const option = firstSelectOptions.find(
      (opt) => opt.value === event.target.value
    );
    setStatusFilter(option || null);
  };

  const handleSortChange = (event) => {
    const option = Options2.find((opt) => opt.value === event.target.value);
    setSortOrder(option || null);
  };

  const handleDateChange = (event) => {
    const value = event.target.value;
    setDateFilter(value);
    if (value === "custom") {
      setShowCustomDatePicker(true);
    } else {
      setShowCustomDatePicker(false);
      setStartDate("");
      setEndDate("");
    }
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    setShowFilters(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const removeFilter = (filterType) => {
    switch (filterType) {
      case "search":
        setSearchQuery("");
        break;
      case "status":
        setStatusFilter(null);
        break;
      case "sort":
        setSortOrder(null);
        break;
      case "date":
        setDateFilter("");
        setShowCustomDatePicker(false);
        setStartDate("");
        setEndDate("");
        break;
      default:
        break;
    }
  };

  const renderFilterChip = (label, value, filterType) => {
    if (!value) return null;
    return (
      <span className="flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2 text-sm">
        <span className="max-w-[150px] truncate">{value}</span>
        <button
          onClick={() => removeFilter(filterType)}
          className="text-xs text-gray-500"
        >
          ✕
        </button>
      </span>
    );
  };

  return (
    <div className="w-full mx-auto rounded-lg bg-gray-50 p-5">
      <div className="flex justify-between items-center pb-5 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-sm text-gray-600 mt-1">{subname}</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-yellow-500 text-white text-xl">
          +
        </button>
      </div>

      <div className="p-5 ">
        <form onSubmit={handleSearchSubmit} className="flex gap-4 mb-5">
          <div className="flex-grow relative ">
            <input
              type="search"
              placeholder="Rechercher des annonces..."
              className="w-full pl-10 h-12 pr-4 py-2 rounded-full border  text-sm"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <button
            type="submit"
            className="px-6 h-12 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm"
          >
            Rechercher
          </button>
        </form>

        <button
          onClick={toggleFilters}
          className="mb-5 h-12 flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200  hover:bg-gray-300 text-sm"
        >
          <ListFilter className="w-5 h-5" />
          {showFilters ? "Filtrer" : "Filtrer"}
        </button>

        {showFilters && (
          <>
            <div className="flex flex-wrap gap-3 mb-3">
              <select
                onChange={handleStatusChange}
                value={statusFilter?.value || ""}
                className="px-4 py-2 rounded-md border h-12 text-sm min-w-[200px]"
              >
                <option value="">Filtrer par statut</option>
                {firstSelectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                onChange={handleSortChange}
                value={sortOrder?.value || ""}
                className="px-4 py-2 rounded-md border h-12 text-sm min-w-[200px]"
              >
                <option value="">Trier par</option>
                {Options2.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                onChange={handleDateChange}
                value={dateFilter}
                className="px-4 py-2 rounded-md border h-12 text-sm min-w-[200px]"
              >
                <option value="">Filtrer par date</option>
                <option value="today">Aujourd'hui</option>
                <option value="this_week">Cette semaine</option>
                <option value="this_month">Ce mois</option>
                <option value="last_month">Le mois dernier</option>
                <option value="custom">Personnalisé</option>
              </select>
            </div>

            {showCustomDatePicker && (
              <div className="flex gap-4 mb-5">
                <div>
                  <label htmlFor="start-date" className="block text-sm">
                    Date de début
                  </label>
                  <input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="px-4 py-2 rounded-md border text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="end-date" className="block text-sm">
                    Date de fin
                  </label>
                  <input
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="px-4 py-2 rounded-md border text-sm"
                  />
                </div>
              </div>
            )}
          </>
        )}

        <div className="flex flex-wrap gap-4">
          {renderFilterChip("Recherche", searchQuery, "search")}
          {renderFilterChip("Statut", statusFilter?.label, "status")}
          {renderFilterChip("Tri", sortOrder?.label, "sort")}
          {renderFilterChip(
            "Date",
            dateFilter === "custom" ? `${startDate} - ${endDate}` : dateFilter,
            "date"
          )}
          {!statusFilter && !sortOrder && !searchQuery && !dateFilter && (
            <span className="text-sm text-gray-600">Aucun filtre appliqué</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
