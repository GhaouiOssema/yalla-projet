import { useState } from "react";
import Money from "../../assets/money.png";
import Inpute from "../../components/forms/Inpute";
import Button from '../../components/forms/Button';
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { postData } from "../../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../../components/apiAndFunction/apiEndpoints";
function Step4({ handlePrevious, formData }) {
  // State to manage the user-proposed price and dynamic costs
  const [priceProposal, setPriceProposal] = useState('');
  const [priceFeedback, setPriceFeedback] = useState('');
  const [livraisonCost, setLivraisonCost] = useState(0);

  const insuranceCost = 0; // Fixed as "offered"

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Include the priceProposal and totalPrice in formData
      const updatedFormData = {
        ...formData, // This comes from the parent CardAdd
        priceProposal, // The proposed price from Step4
        totalPrice: priceProposal ? parseFloat(priceProposal) + livraisonCost + insuranceCost : 0, // Calculate the total price
      };

      // Convert formData to JSON format
      const jsonData = JSON.stringify(updatedFormData);
      console.log("Submitting final JSON data:", jsonData); // Debugging log

      // Post this JSON data to the mock API (e.g., using json-server)
      await postData(API_ENDPOINTS.Add_Announcement, jsonData);

      // Handle success or navigate the user
      console.log("Form data successfully submitted and stored.");
      window.location.reload();
      alert("Wallet added successfully!");


    } catch (error) {
      console.error("Error submitting form data:", error);
    }
};


  const handlePriceChange = (e) => {
    const price = e.target.value;
    setPriceProposal(price);

    const priceNumber = parseFloat(price);
    if (!isNaN(priceNumber)) {
      if (priceNumber < 60) {
        setPriceFeedback('Votre prix est inférieur à la moyenne.');
        setLivraisonCost(5);
      } else if (priceNumber > 88) {
        setPriceFeedback('Votre prix est supérieur à la moyenne.');
        setLivraisonCost(0);
      } else {
        setPriceFeedback('Votre prix est dans la moyenne.');
        setLivraisonCost(2);
      }
    } else {
      setPriceFeedback('');
      setLivraisonCost(0);
    }
  };

  const totalPrice = priceProposal ? parseFloat(priceProposal) + livraisonCost + insuranceCost : 0;

  return (
    <>
      <div className="bg-white p-8 mt-5 rounded-lg shadow-md w-full max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Faites votre proposition</h2>
        <div className="flex justify-center mb-4">
          <img src={Money} className="h-16 w-16" alt="Money" />
        </div>
        <p className="text-center text-sm mb-6">Le prix généralement proposé est compris entre 60 € et 88 €.</p>
        <div className="border-t border-b py-4 mb-4">
          <label className="block text-center text-lg font-medium mb-2" htmlFor="price">
            Proposition tarifaire
          </label>
          <div className="flex justify-center">
            <Inpute
              placeholder="Exp: 68€"
              type="text"
              value={priceProposal}
              onChange={handlePriceChange}
            />
          </div>
          {priceFeedback && (
            <p className="text-center text-sm mt-2">{priceFeedback}</p>
          )}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Livraison</span>
            <span>{livraisonCost.toFixed(2)} €</span> {/* Show the dynamic delivery cost */}
          </div>
          <div className="flex justify-between">
            <span>Assurance (jusqu à 150€)</span>
            <span className="font-semibold text-yellow-500">offerte</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2 mt-2">
            <span>Prix total TTC</span>
            <span className="text-yellow-500">{totalPrice.toFixed(2)} €</span> {/* Dynamic total price */}
          </div>
        </div>
      </div>

      {/* Form with onSubmit handler */}
        <div className="mt-5 mb-5">
          <div className="flex justify-between w-full">
            <button
              className="btn rounded-lg shadow-none border-none min-w-[200px] bg-with py-3 text-base font-medium transition duration-200 hover:bg-gray-200 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-200 dark:active:bg-yellow-200"
              onClick={handlePrevious}
            >
              Précédent <KeyboardReturnIcon />
            </button>
            <Button
              buttonName="Submit"
              icons={<KeyboardTabIcon className="ml-4" />}
              handleClick={handleSubmit}
              />
          </div>
        </div>
    </>
  );
}

export default Step4;
