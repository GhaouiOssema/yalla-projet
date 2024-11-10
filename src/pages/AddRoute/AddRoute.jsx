import {useState}from "react";
import Inpute from "../../components/forms/Inpute";
import Radio from '@mui/material/Radio';
import Button from "../../components/forms/Button";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { postData } from "../../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../../components/apiAndFunction/apiEndpoints";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AddRoute = () => {
  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const [checkedDays, setCheckedDays] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [selectedValue, setSelectedValue] = useState("a");
  const [selectedValue2, setSelectedValue2] = useState("c");
  const [showInput, setShowInput] = useState(false); // State to track input visibility
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [isAllerRetourChecked, setIsAllerRetourChecked] = useState(false);
  const [checkedRetourDays, setCheckedRetourDays] = useState([]);
  const [checkAllRetour, setCheckAllRetour] = useState(false);



  const [etapes, setEtapes] = useState([""]);


  const handleAllerRetourChange = (event) => {
    const isChecked = event.target.checked;
    setIsAllerRetourChecked(isChecked);
    setRoutesFormData((prevState) => ({
      ...prevState,
      allerRetour: isChecked,
    }));
  };
const handleDayChange = (event) => {
  const { value, checked } = event.target;
  const updatedCheckedDays = checked
    ? [...checkedDays, value]
    : checkedDays.filter((day) => day !== value);
  setCheckedDays(updatedCheckedDays);

  // Update routesFormData with selected "Aller" days
  setRoutesFormData((prevState) => ({
    ...prevState,
    dateAller: updatedCheckedDays.join(", "), // Joining the days as a string
  }));
};

const handleRetourDayChange = (event) => {
  const { value, checked } = event.target;
  const updatedCheckedRetourDays = checked
    ? [...checkedRetourDays, value]
    : checkedRetourDays.filter((day) => day !== value);
  setCheckedRetourDays(updatedCheckedRetourDays);

  // Update routesFormData with selected "Retour" days
  setRoutesFormData((prevState) => ({
    ...prevState,
    dateRetour: updatedCheckedRetourDays.join(", "), // Joining the days as a string
  }));
};

const handleCheckAllChange = () => {
  const updatedCheckedDays = checkAll ? [] : daysOfWeek;
  setCheckedDays(updatedCheckedDays);
  setCheckAll(!checkAll);

  // Update routesFormData for "Aller" with all days selected
  setRoutesFormData((prevState) => ({
    ...prevState,
    dateAller: updatedCheckedDays.join(", "),
  }));
};

const handleCheckAllRetourChange = () => {
  const updatedCheckedRetourDays = checkAllRetour ? [] : daysOfWeek;
  setCheckedRetourDays(updatedCheckedRetourDays);
  setCheckAllRetour(!checkAllRetour);

  // Update routesFormData for "Retour" with all days selected
  setRoutesFormData((prevState) => ({
    ...prevState,
    dateRetour: updatedCheckedRetourDays.join(", "),
  }));
};

  const [routesFormData, setRoutesFormData] = useState({
    departCity: "",
    arrivalCity: "",
    address: "",
    RayonAction: 0,
    minPrice: "",
    dateAller: "",
    dateRetour: "",
    frequency: "once",
    allerRetour: false,
    etapes: [""],
  });

  // Handle input changes and update form state
  const SubmithandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRoutesFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    try {
        const dataToSubmit = {
            ...routesFormData,
        };
      await postData(API_ENDPOINTS.Add_Route, dataToSubmit);
      alert("Route added successfully!");
      setRoutesFormData({
        departCity: "",
        arrivalCity: "",
        address: "",
        RayonAction: 0,
        minPrice: "",
        dateAller: "",
        dateRetour: "",
        frequency: "",
        allerRetour: false,
        etapes: [],

      });
      window.location.reload();

    } catch (error) {
      console.error("Error adding route:", error);
      alert("Failed to add route. Please try again.");
    } finally {
      setLoading(false); // End loading state
    }
  };
  const handleEtapeChange = (e, index) => {
    const { value } = e.target;
    const updatedEtapes = etapes.map((etape, i) => (i === index ? value : etape));
    setEtapes(updatedEtapes);
    setRoutesFormData((prev) => ({ ...prev, etapes: updatedEtapes })); // Update form data state with etapes
  };



  const handleCheckboxChange = () => {
    setShowInput(!showInput);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange2 = (event) => {
    const selectedFrequency = event.target.value;
    setSelectedValue2(selectedFrequency);
    
    // Update the routesFormData with the selected frequency
    setRoutesFormData((prevData) => ({
      ...prevData,
      frequency: selectedFrequency === 'c' ? 'once' : 'regular', // Map radio button values to form field values
    }));
  };

  // Add a new step
  const addEtape = () => {
    setEtapes([...etapes, ""]);
  };

  // Remove a step by index
  const deleteEtapes = (index) => {
    const updatedEtapes = etapes.filter((_, i) => i !== index); // Create a new array without the deleted etape
    
    // Update both the local etapes state and the form data with the updated etapes array
    setEtapes(updatedEtapes);
    setRoutesFormData((prevData) => ({
      ...prevData,
      etapes: updatedEtapes,
    }));
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const controlProps2 = (item) => ({
    checked: selectedValue2 === item,
    onChange: handleChange2,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const PrettoSlider = styled(Slider)({
    color: "#fac53f",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&::before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 50,
      height: 50,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#fbbf24",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&::before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });
  

  return (
    <div className="container w-full lg:w-full lg:px-[20%] md:w-[70%] p-5 mt-10">
      <h1 className="font-semibold text-[30px] text-gray-800">Votre itinéraire</h1>

      <form  onSubmit={handleSubmit}> 
      <div>
        <div className="flex items-center justify-between mt-5">
          <div className="font-semibold text-[15px] text-gray-600 ml-3">Je recherche des livraisons</div>
          <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" />
        </div>

        <div className="mt-5">
          <Radio {...controlProps('a')} sx={{ color:'#E9E9EA', '&.Mui-checked': { color:'#fbbf24', }, }} />
          <label className="font-semibold text-[13px] mb-3 text-gray-400 mr-4">Sur mon trajet</label>
          <Radio {...controlProps('b')} sx={{ color:'#E9E9EA', '&.Mui-checked': { color:'#fbbf24', }, }} />
          <label className="font-semibold text-[13px] mb-3 text-gray-400">Autour de moi</label>
        </div>

        {selectedValue ==='b' ?(
          <>
            <div className="mt-4 ml-3">
                <label className="font-semibold text-[13px] mb-3 text-gray-500">Adresse</label>
                <Inpute 
                    placeholder="Exp: 13 rue de Rilover , 70021 Paris" 
                    type="text"
                    name="address"
                    value={routesFormData.address}
                    onChange={SubmithandleChange}
                />
            </div>
            <div className="mt-4 ml-3" >
            <label className="font-semibold text-[13px] text-gray-500">Rayon d action</label>
          
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              max={300}
              defaultValue={routesFormData.RayonAction}
              onChange={(e, value) => setRoutesFormData((prev) => ({ ...prev, RayonAction: value }))}
              valueLabelFormat={(value) => `${value} km`}         
                 />
            </div>
          </>
        ):(
          <>
          <div  className="mt-4 ml-3">
            <label className="font-semibold text-[13px] mb-3 text-gray-500">Ville de départ</label>
            <Inpute  
                   placeholder="Exp: 13 rue de Rilover , 70021 Paris" 
                   type="text" 
                   name="departCity"
                   value={routesFormData.departCity}
                   onChange={SubmithandleChange}
            />
           {etapes.map((etape, index) => (
            <div key={index} className="flex items-center">
                <Inpute
                placeholder={`Étape ${index + 1}`}
                type="text"
                name={`etape-${index}`}
                value={etape}
                onChange={(e) => handleEtapeChange(e, index)}
                />
                <IconButton aria-label="delete" onClick={() => deleteEtapes(index)} disableRipple>
                <DeleteIcon className="mt-2" sx={{ color: 'red' }} />
                </IconButton>
            </div>
            ))}


          </div>

            <div className="mt-4 ml-3">
              <label className="font-semibold text-[13px] mb-3 text-gray-500">Ville d arrivée</label>
              <Inpute  
                    placeholder="Exp: 13 rue de Rilover , 70021 Marsielle" 
                    type="text" 
                    name="arrivalCity"
                    value={routesFormData.arrivalCity}
                    onChange={SubmithandleChange}
              />
            </div>

            <div className="flex flex-col items-end mt-5">
              <Button buttonName="Ajouter une étape" handleClick={addEtape} />
            </div>

          </>
        )}
       
      </div>

      <div>
        <div className="flex items-center justify-between mt-5">
          <div className="font-semibold text-[15px] text-gray-600 ml-3">D un montant minimum</div>
          <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" style={{ height: '5px' }}/>
        </div>
        <div className="mt-4 ml-3 mb-3">
                <label className="font-semibold text-[13px] mb-3 text-gray-500">Prix minimum accepté</label>
                <Inpute 
                      placeholder="Exp: 60$" 
                      type="text" 
                      name="minPrice"
                      value={routesFormData.minPrice}
                      onChange={SubmithandleChange}
                />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mt-5">
            <div className="font-semibold text-[15px] text-gray-600 ml-3">Fréquence</div>
            <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" style={{ height: '5px' }}/>
        </div>
        <div className="mt-5">
          <Radio {...controlProps2('c')} sx={{ color:'#E9E9EA', '&.Mui-checked': { color:'#fbbf24', }, }} />
          <label className="font-semibold text-[13px] mb-3 text-gray-400 mr-4">Je fais le trajet une fois</label>
          <Radio {...controlProps2('d')} sx={{ color:'#E9E9EA', '&.Mui-checked': { color:'#fbbf24', }, }} />
          <label className="font-semibold text-[13px] mb-3 text-gray-400">Je fais le trajet régulièrement</label>
        </div>
      </div>

      {(selectedValue === 'b' || selectedValue === 'a') && selectedValue2 === 'c' ?(
      <div>
        <div className="flex items-center justify-between mt-5">
            <div className="font-semibold text-[15px] text-gray-600 ml-3">Date</div>
            <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" style={{ height: '5px' }}/>
        </div>
        <div className="mt-4 ml-3 mb-3">
                <label className="font-semibold text-[13px] mb-3 text-gray-500">Date du trajet aller</label>
                <Inpute 
                       placeholder="Exp: 60$" 
                       type="date" 
                       name="dateAller"
                       value={routesFormData.dateAller}
                       onChange={SubmithandleChange}
                />
        </div>
        {selectedValue ==='a' && selectedValue2 ==='c'?(
          <>
           <Checkbox
              {...label}
              onChange={handleCheckboxChange}
              sx={{
                color: '#d8d8d8',
                '&.Mui-checked': {
                  color: '#fbbf24',
                },
              }}
            /><label className="font-semibold text-[13px] mb-3 text-gray-500">Aller-retour</label>
          </>
        ):(null)}
        
        <div>
        {showInput && (
          <div className="mt-4 ml-3 mb-3">
            <label className="font-semibold text-[13px] mb-3 text-gray-500">Date du trajet retour
            </label>
            <Inpute 
                  placeholder="Exp: 60$" 
                  type="date" 
                  name="dateRetour"
                  value={routesFormData.dateRetour}
                  onChange={SubmithandleChange}
            />
          </div> 
        )}
        </div>
      </div>

      ):null}
   {selectedValue === "a" && selectedValue2 === "d" ? (
        <>
          {/* Date header */}
          <div className="flex items-center justify-between mt-5">
            <div className="font-semibold text-[15px] text-gray-600 ml-3">Date</div>
            <div
              className="flex-1 border-b border-gray-200 rounded-[3px] dark:border-gray-200 ml-4"
              style={{ height: "5px" }}
            />
          </div>

          {/* Aller-Retour Checkbox */}
          <Checkbox
            sx={{
              color: "#d8d8d8",
              "&.Mui-checked": {
                color: "#fbbf24",
              },
            }}
            checked={isAllerRetourChecked}
            onChange={handleAllerRetourChange}
          />
          <label className="font-semibold text-[13px] mb-5 text-gray-500">
            Aller-retour
          </label>

          {/* Aller Days Selection */}
          <div>
            <label className="font-semibold text-[13px] mb-5 ml-3 text-gray-500">
              Aller le(s)
            </label>
            <div className="flex flex-wrap items-center">
              {daysOfWeek.map((day) => (
                <div key={day} className="flex items-center mr-4 mb-2">
                  <Checkbox
                    value={day}
                    checked={checkedDays.includes(day)} // Using checkedDays for "Aller" days
                    onChange={handleDayChange} // This handles "Aller" days selection
                    sx={{
                      color: "#d8d8d8",
                      "&.Mui-checked": {
                        color: "#fbbf24",
                      },
                    }}
                  />
                  <label className="font-semibold text-[12px] ml-1 text-gray-500">
                    {day}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Checkbox
                checked={checkAll}
                onChange={handleCheckAllChange}
                sx={{
                  color: "#d8d8d8",
                  "&.Mui-checked": {
                    color: "#fbbf24",
                  },
                }}
              />
              <label className="font-semibold text-[13px] mb-3 text-gray-500">
                Tous les jours
              </label>
            </div>
          </div>

          {/* Retour Days Selection (Conditional) */}
          {isAllerRetourChecked && (
            <>
              <label className="font-semibold text-[13px] mb-5 ml-3 text-gray-500">
                Retour le(s)
              </label>
              <div className="flex flex-wrap items-center">
                {daysOfWeek.map((day) => (
                  <div key={day} className="flex items-center mr-4 mb-2">
                    <Checkbox
                      value={day}
                      checked={checkedRetourDays.includes(day)} // Using checkedRetourDays for "Retour" days
                      onChange={handleRetourDayChange} // This handles "Retour" days selection
                      sx={{
                        color: "#d8d8d8",
                        "&.Mui-checked": {
                          color: "#fbbf24",
                        },
                      }}
                    />
                    <label className="font-semibold text-[12px] ml-1 text-gray-500">
                      {day}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Checkbox
                  checked={checkAllRetour}
                  onChange={handleCheckAllRetourChange}
                  sx={{
                    color: "#d8d8d8",
                    "&.Mui-checked": {
                      color: "#fbbf24",
                    },
                  }}
                />
                <label className="font-semibold text-[13px] mb-3 text-gray-500">
                  Tous les jours
                </label>
              </div>
            </>
          )}
        </>
      ) : null}

      <div className="flex flex-col items-center mt-5">
      <Button buttonName={loading ? "En cours..." : "Valider"} type="submit" disabled={loading} />

      </div>
      </form>
    </div>
  );
};

export default AddRoute;