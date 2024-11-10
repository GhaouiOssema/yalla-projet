import "tailwindcss/tailwind.css";
import CardCarnetAdress from "../components/CardCarnetAdress";
import Button from "../components/forms/Button";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import InputeStyles from "../utils/InputeStyles";
import { getData } from "../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../components/apiAndFunction/apiEndpoints";
import { useEffect, useState } from "react";

const firstSelectOptions = [
  { value: "2", label: "Par pays" },
  { value: "3", label: "Par ville" },
  { value: "4", label: "Par code postal" },
];

const Options2 = [
  { value: "option1", label: "Les plus anciens" },
  { value: "option2", label: "Les plus récents" },
];
const AddressesBook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [AddressesBook, setLAddressesBook] = useState([]); // State to store annonces
  const [error, setError] = useState(null); // Error state to handle issues with data fetching
  const [loading, setLoading] = useState(true); // Loading state to handle the async nature of the request

  const fetchAddressesBook = async () => {
    try {
      const response = await getData(API_ENDPOINTS.GET_AddressesBook); // Fetch the JSON data
      if (response) {
        setLAddressesBook(response); // Assuming the API response has "annonces" key
      } else {
        setError("Invalid response format"); // Error handling if the structure is not as expected
      }
    } catch (err) {
      setError(err.message); // Catching errors and updating state
    } finally {
      setLoading(false); // Setting loading to false after the request completes
    }
  };

  useEffect(() => {
    fetchAddressesBook();
    console.log(AddressesBook);
  }, [AddressesBook]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return (
      <div className="container w-full   p-2 md:p-10  mt-10  ">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Carnet d'adresses</h1>
          <Button buttonName="Ajouter une adresse" />
        </div>
        <div className=" dark:bg-gray-950  ">
          <div className="relative mb-4">
            {/* search */}
            <input
              className="w-full p-3 pl-16 pr-4  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
              type="text"
              placeholder="Recherche par adresse"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={InputeStyles}
            />
            <div className="absolute inset-y-0 left-0 p-3 flex items-center pointer-events-none bg-yellow-500  rounded-l">
              <SearchIcon className="text-white" />
            </div>
          </div>
          {/* Filter Options */}
          <div className="flex mb-4">
            <div className="flex-grow mr-2 w-70">
              <Select
                className="flex-grow w-full mr-2  text-sm  border border-gray-200 py  rounded bg-color  "
                options={firstSelectOptions}
                styles={InputeStyles}
                isSearchable={false}
              />
            </div>
            {/* Filter Options 2 */}
            <div className="flex-grow  w-30">
              <Select
                className="flex-grow w-full  text-sm  border border-gray-200  rounded"
                options={Options2}
                styles={InputeStyles}
                isSearchable={false}
              />
            </div>
          </div>
          Error: {error}
        </div>
      </div>
    ); // Display error if something goes wrong
  }

  return (
    <div className="container w-full   p-2 md:p-10  mt-10  ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Carnet d'adresses</h1>
        <Button buttonName="Ajouter une adresse" />
      </div>
      <div className=" dark:bg-gray-950  ">
        <div className="relative mb-4">
          {/* search */}
          <input
            className="w-full p-3 pl-16 pr-4  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
            type="text"
            placeholder="Recherche par adresse"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={InputeStyles}
          />
          <div className="absolute inset-y-0 left-0 p-3 flex items-center pointer-events-none bg-yellow-500  rounded-l">
            <SearchIcon className="text-white" />
          </div>
        </div>
        {/* Filter Options */}
        <div className="flex mb-4">
          <div className="flex-grow mr-2 w-70">
            <Select
              className="flex-grow w-full mr-2  text-sm  border border-gray-200 py  rounded bg-color  "
              options={firstSelectOptions}
              styles={InputeStyles}
              isSearchable={false}
            />
          </div>
          {/* Filter Options 2 */}
          <div className="flex-grow  w-30">
            <Select
              className="flex-grow w-full  text-sm  border border-gray-200  rounded"
              options={Options2}
              styles={InputeStyles}
              isSearchable={false}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {AddressesBook.length > 0 ? (
            AddressesBook.map((item, index) => (
              <div key={index}>
                <CardCarnetAdress
                  id={item.id}
                  name="Adresse" // You can adjust this if you want a dynamic name or title
                  address={item.adresse_ligne_1}
                  city={`${item.code_postal} ${item.ville}, ${item.pays}`}
                />
              </div>
            ))
          ) : (
            <div>
              <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
                Oups, tu n as pas encore de Adresse. allons chercher une ?
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressesBook;
