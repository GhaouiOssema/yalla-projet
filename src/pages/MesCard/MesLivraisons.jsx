import Card from "./Card";
import { getData } from "../../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../../components/apiAndFunction/apiEndpoints";
import { MapPin, Clock } from "lucide-react";
import Button from "../../components/forms/Button";

import { useEffect, useState } from "react";
const MesLivraisons = () => {
  const [livraisons, setLivraisons] = useState([]); // State to store annonces
  const [error, setError] = useState(null); // Error state to handle issues with data fetching
  const [loading, setLoading] = useState(true); // Loading state to handle the async nature of the request

  const fetchLivraisons = async () => {
    try {
      const response = await getData(API_ENDPOINTS.GET_livraisons); // Fetch the JSON data
      if (response) {
        setLivraisons(response); // Assuming the API response has "annonces" key
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
    fetchLivraisons();
    console.log(livraisons);
  }, [livraisons]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="container w-full p-2 lg:px-[20%] mt-10">
        {" "}
        <Card
          name="Mes livraisons"
          firstSelectOptions={[
            { value: "1", label: "Toutes mes annonces" },
            { value: "2", label: "En attente de paiement" },
            { value: "3", label: "En attente de disponibilités " },
            { value: "4", label: "En ligne" },
            { value: "5", label: "En cours de livraison" },
            { value: "6", label: "Livrées" },
            { value: "7", label: "Expirées" },
            { value: "8", label: "Refusées" },
          ]}
          Options2={[
            { value: "option1", label: "Les plus anciens" },
            { value: "option2", label: "Les plus récents" },
          ]}
        />
        <div>
          <div>
            <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
              Error: {error}{" "}
            </h1>
            <div className="mt-5 text-center">
              <Button buttonName="Chercher un colis!" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container w-full p-2 lg:px-[20%] mt-10">
      <Card
        name="Mes livraisons"
        firstSelectOptions={[
          { value: "1", label: "Toutes mes annonces" },
          { value: "2", label: "En attente de paiement" },
          { value: "3", label: "En attente de disponibilités " },
          { value: "4", label: "En ligne" },
          { value: "5", label: "En cours de livraison" },
          { value: "6", label: "Livrées" },
          { value: "7", label: "Expirées" },
          { value: "8", label: "Refusées" },
        ]}
        Options2={[
          { value: "option1", label: "Les plus anciens" },
          { value: "option2", label: "Les plus récents" },
        ]}
      />
      {/* Last Section */}

      <div className=" bg-gray-50 border p-2 rounded mt-8 flex flex-col items-center justify-center">
        {livraisons.length > 0 ? (
          livraisons.map((livraison) => (
            <div
              key={livraison.id}
              className="w-full bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <div className="flex items-start">
                <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                  <div className="w-12 h-12 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-yellow-500 font-semibold text-lg">
                        Receiver: {livraison.receiverName}
                      </h2>
                      <div className="text-gray-600 text-sm mt-1">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {livraison.address}
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm mt-1">
                        <span>Weight: {livraison.weight}</span>
                      </div>
                    </div>
                    <span className="text-yellow-500 font-bold text-xl">
                      {livraison.status}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>Delivery Date: {livraison.deliveryDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
              Oups, tu n as pas encore de livraison. allons chercher une ?
            </h1>
            <div className="mt-5 text-center">
              <Button buttonName="Chercher un colis!" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MesLivraisons;
