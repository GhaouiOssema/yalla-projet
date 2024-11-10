import { useState } from "react";
import "tailwindcss/tailwind.css";
import Icons from "../components/Icons/Icons";
import RadioButton from "../components/RadioButton";
import Button from "../components/forms/Button";
import Inpute from "../components/forms/Inpute";

import { postData } from "../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../components/apiAndFunction/apiEndpoints";

const Payments = () => {
  const [selectedValue, setSelectedValue] = useState("card");

  // State for card form data
  const [cartsFormData, setCartsFormData] = useState({
    titulaire: "",
    iban: "",
    adresse: "",
    complementAdresse: "",
    codePostal: "",
    ville: "",
  });

  // State for wallet form data
  const [walletFormData, setWalletFormData] = useState({
    walletName: "",
    walletId: "",
  });

  // Handle changes for card form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCartsFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes for wallet form inputs
  const wallethandleChange = (e) => {
    const { name, value } = e.target;
    setWalletFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle card form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Post the card form data to the backend API
      await postData(API_ENDPOINTS.Add_Card, cartsFormData);
      alert("Card added successfully!");

      // Reset form data after submission
      setCartsFormData({
        titulaire: "",
        iban: "",
        adresse: "",
        complementAdresse: "",
        codePostal: "",
        ville: "",
      });
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  // Handle wallet form submission
  const wallethandleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Post the wallet form data to the backend API
      await postData(API_ENDPOINTS.ADD_WALLET, walletFormData);
      alert("Wallet added successfully!");

      // Reset wallet form data after submission
      setWalletFormData({
        walletName: "",
        walletId: "",
      });
    } catch (error) {
      console.error("Error adding wallet:", error);
    }
  };

  // Handle radio button change
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <main className="flex justify-center w-full px-32 h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-3xl font-bold mb-8">Ajouter un moyen de paiement</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border rounded-lg p-5">
          <div className="col-span-1">
            <div className="grid gap-4 mt-2">
              <RadioButton
                label="Carte"
                icon={<Icons.CreditCardIcon />}
                value="card"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
              <RadioButton
                label="Portefeuille"
                icon={<Icons.WalletCardsIcon />}
                value="wallet"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
            </div>
          </div>
          <div className="col-span-2">
            {selectedValue === "card" && (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <Inpute
                  placeholder="Titulaire du compte"
                  type="text"
                  name="titulaire"
                  value={cartsFormData.titulaire}
                  onChange={handleChange}
                />
                <Inpute
                  placeholder="IBAN"
                  type="text"
                  name="iban"
                  value={cartsFormData.iban}
                  onChange={handleChange}
                />
                <Inpute
                  placeholder="Adresse"
                  type="text"
                  name="adresse"
                  value={cartsFormData.adresse}
                  onChange={handleChange}
                />
                <Inpute
                  placeholder="Complément d'adresse"
                  type="text"
                  name="complementAdresse"
                  value={cartsFormData.complementAdresse}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Inpute
                    placeholder="Code postal"
                    type="text"
                    name="codePostal"
                    value={cartsFormData.codePostal}
                    onChange={handleChange}
                  />
                  <Inpute
                    placeholder="Ville"
                    type="text"
                    name="ville"
                    value={cartsFormData.ville}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center">
                  <Button buttonName="Ajouter" type="submit" />
                </div>
              </form>
            )}

            {selectedValue === "wallet" && (
              <form className="grid gap-4" onSubmit={wallethandleSubmit}>
                <Inpute
                  placeholder="Nom du portefeuille"
                  type="text"
                  name="walletName"
                  value={walletFormData.walletName}
                  onChange={wallethandleChange}
                />
                <Inpute
                  placeholder="ID du portefeuille"
                  type="text"
                  name="walletId"
                  value={walletFormData.walletId}
                  onChange={wallethandleChange}
                />
                <div className="text-center">
                  <Button buttonName="Ajouter" type="submit" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payments;
