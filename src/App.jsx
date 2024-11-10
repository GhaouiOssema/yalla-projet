import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Select from "react-select";
import InputeStyles from "../../utils/InputeStyles";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Card = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  Card.propTypes = {
    name: PropTypes.string.isRequired,
    firstSelectOptions: PropTypes.array.isRequired,
    Options2: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
    annonces: PropTypes.array.isRequired, // Adding annonces to PropTypes
  };

  return (
    <div>
      <div className="flex items-center justify-between  ">
        <h1 className="text-2xl font-semibold">{props.name}</h1>
        <button className=" px-3 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 flex items-center justify-center">
          <Plus className="h-6 w-6" />
        </button>
      </div>

      <div className="relative mt-4 mb-4">
        {/* Search */}
        <input
          className="w-full p-3 pl-16 pr-4 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
          type="text"
          placeholder="Recherche par titre, ref annonces"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={InputeStyles}
        />
        <div className="absolute inset-y-0 left-0 p-3 flex items-center pointer-events-none bg-yellow-500 rounded-l">
          <SearchIcon className="text-white" />
        </div>
      </div>

      {/* Filter Options */}
      <div className="flex mb-4">
        <div className="flex-grow mr-2 w-70">
          <Select
            className="flex-grow w-full mr-2 text-sm border border-gray-200 py rounded bg-color"
            options={props.firstSelectOptions}
            styles={InputeStyles}
            isSearchable={false}
          />
        </div>
        <div className="flex-grow w-30">
          <Select
            className="flex-grow w-full text-sm border border-gray-200 rounded"
            options={props.Options2}
            styles={InputeStyles}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="mb-4  ">
        <Button className="w-full bg-yellow-500 text-white font-medium hover:bg-yellow-600 flex items-center justify-center gap-2">
          <span> chercher </span>
        </Button>
      </div>
      <div class="h-2 rounded-lg bg-gray-100 my-4"></div>
    </div>
  );
};

export default Card;
