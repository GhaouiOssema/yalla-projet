import { useState } from "react";
import Inpute from "../../components/forms/Inpute";
import Select from "react-select";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputeStyles from "../../utils/InputeStyles";
import Button from "../../components/forms/Button";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const Options1 = [
  { value: "1", label: " Au pied du véhicule  " },
  { value: "2", label: " Manutention - 1 personne (29€)  " },
  { value: "3", label: "Manutention - 2 personne (59€)  " },
];

const Options2 = [
  { value: "1", label: " RDC" },
  { value: "2", label: " 1ere" },
  { value: "3", label: "2ème" },
  { value: "4", label: "3ème" },
];

const Option3 = [
  { value: "1", label: "Avec ascenseur" },
  { value: "2", label: " Sans ascenseur" },
];

function StepsItems({ handleNextSteps, name, handlePrevious }) {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [showExactDimensions, setShowExactDimensions] = useState(false);
  const [StepsItemsFormData, setStepsItemsFormData] = useState({
    adresse: "",
    typeEnlevement: "",
    etage: "",
    acces: "",
    prenom: "",
    nom: "",
    telephone: "",
    instructions: "",
  });
  const handleSubmit = () => {
    handleNextSteps(StepsItemsFormData); // Move to the next step
  };
  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStepsItemsFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange1 = (selectedOption) => {
    setSelectedOption1(selectedOption);
    setStepsItemsFormData((prevData) => ({
      ...prevData,
      typeEnlevement: selectedOption.label, // Update based on selection
    }));
  };

  const handleSelectChangeEtage = (selectedOption) => {
    setStepsItemsFormData((prevData) => ({
      ...prevData,
      etage: selectedOption.label,
    }));
  };

  const handleSelectChangeAcces = (selectedOption) => {
    setStepsItemsFormData((prevData) => ({
      ...prevData,
      acces: selectedOption.label,
    }));
  };

  const SwitchOnOf = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#fbbf24" : "#fbbf24",
          opacity: 1,
          border: 0,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <div>
      <h1 className="font-semibold text-[30px] text-gray-800 mb-5">{name}</h1>

      <div className="mb-4">
        <label className="font-semibold text-[13px] mb-3 text-gray-600">
          Adresse
        </label>
        <Inpute
          placeholder="Exp: 13 rue de Rilover , 70021 Paris"
          type="tel"
          name="adresse"
          value={StepsItemsFormData.adresse}
          onChange={handleInputChange}
        />
      </div>

      <label className="font-semibold text-[13px]  text-gray-600">
        Type d enlèvement
      </label>
      <Select
        className="flex-grow w-full mr-2 mt-1 text-sm border border-gray-200 py rounded bg-color focus:outline-none focus:ring-2 focus:ring-yellow-500"
        options={Options1}
        isSearchable={false}
        styles={InputeStyles}
        onChange={handleSelectChange1}
      />

      {selectedOption1 && selectedOption1.value !== "1" && (
        <div className="flex mt-4">
          <div className="w-1/2 mr-3">
            <label className="font-semibold text-[13px]  text-gray-600">
              Étage
            </label>
            <Select
              className="flex-grow w-full mr-2 mt-1 text-sm border border-gray-200 py rounded bg-color"
              options={Options2}
              isSearchable={false}
              onChange={handleSelectChangeEtage}
            />
          </div>
          <div className="w-1/2">
            <label className="font-semibold text-[13px]  text-gray-600">
              Accès
            </label>
            <Select
              className="flex-grow w-full mr-2 mt-1 text-sm border border-gray-200 py rounded bg-color"
              options={Option3}
              isSearchable={false}
              onChange={handleSelectChangeAcces}
            />
          </div>
        </div>
      )}

      <FormControlLabel
        control={<SwitchOnOf sx={{ m: 1 }} defaultChecked />}
        checked={showExactDimensions}
        onChange={() => setShowExactDimensions(!showExactDimensions)}
        label="J'ai les coordonnées de l'expéditeur"
      />

      {showExactDimensions && (
        <>
          <div className="flex mb-4">
            <div className="w-1/2 mr-3">
              <label className="font-semibold text-[13px] text-gray-600">
                Prénom
              </label>
              <Inpute
                placeholder="Exp: Saber"
                type="tel"
                name="prenom"
                value={StepsItemsFormData.prenom}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2">
              <label className="font-semibold text-[13px] text-gray-600">
                Nom
              </label>
              <Inpute
                placeholder="Exp: Mgannem"
                type="tel"
                name="nom"
                value={StepsItemsFormData.nom}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="font-semibold text-[13px] mb-3 text-gray-600">
              Numéro de téléphone
            </label>
            <Inpute
              placeholder="Exp: 13 rue de Rilover , 70021 Paris"
              type="tel"
              name="telephone"
              value={StepsItemsFormData.telephone}
              onChange={handleInputChange}
            />
          </div>

          <label className="font-semibold text-[13px] text-gray-600">
            Instructions d enlèvement
          </label>
          <textarea
            className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="textarea"
            placeholder="Ex : Rue étroite, stationnement complique, appelez quand vous arrivez"
            name="instructions"
            value={StepsItemsFormData.instructions}
            onChange={handleInputChange}
          />
          <p className="text-xs text-gray-500 mt-2">
            Ces informations sont privées et ne seront partagées avec le
            transporteur qu après réservation.
          </p>
        </>
      )}

      <div className="mt-4 mb-5">
        <div className="flex justify-between w-full">
          <button
            className="btn rounded-lg shadow-none border-none min-w-[200px] bg-with py-3 text-base font-medium transition duration-200 hover:bg-gry-200 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-200 dark:active:bg-yellow-200"
            onClick={handlePrevious}
          >
            Précédent <KeyboardReturnIcon />
          </button>
          <Button
            buttonName="Suivant"
            icons={<KeyboardTabIcon className="ml-4" />}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default StepsItems;
