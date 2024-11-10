import { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Select from 'react-select';
import InputeStyles from "../../utils/InputeStyles";
import PropTypes from 'prop-types';

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
    <div >

      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-[20px] text-gray-800">{props.name}</h1>
        <div className="flex items-center">
          <span className="mr-4"></span>
          <AddIcon className="text-yellow-500 mb-1 text-4xl ml-4" style={{ fontSize: "2rem" }} />
        </div>
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

    </div>
  );
};

export default Card;
