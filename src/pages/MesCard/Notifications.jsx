import Card from "./Card";
import { getData } from "../../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../../components/apiAndFunction/apiEndpoints";
import { useEffect, useState } from "react";
import { MapPin, MessageCircle, Clock } from "lucide-react";
import Button from "../../components/forms/Button";
import { Calendar, DollarSign, User, Users } from "lucide-react";
import IMG from "../../assets/aa.png";
import { Link } from "react-router-dom";

const Annonces = () => {
  const [annonces, setAnnonces] = useState([
    {
      id: 1,
      adresse: "Paris, 75001",
      title: "annonces-1",
      date: "2023-06-15",
      photo: IMG,
      prix: 200,
      trajet: {
        depart: {
          ville: "Tunis",
          codePostal: "1000",
        },
        arrivee: {
          ville: "Paris",
          codePostal: "75002",
        },
      },
      etat: "En cours",
      poids: "0.5kg",
      fragile: true,
    },
    {
      id: 2,
      adresse: "Paris, 75008",
      title: "annonces-2",
      date: "2023-06-16",
      photo: IMG,
      prix: 350,
      trajet: {
        depart: {
          ville: "Tunis",
          codePostal: "1001",
        },
        arrivee: {
          ville: "Paris",
          codePostal: "75008",
        },
      },
      etat: "Livré",
      poids: "2kg",
      fragile: false,
    },
    {
      id: 2,
      adresse: "Paris, 75008",
      title: "annonces-3",
      date: "2023-06-16",
      photo: IMG,
      prix: 350,
      trajet: {
        depart: {
          ville: "Tunis",
          codePostal: "1001",
        },
        arrivee: {
          ville: "Paris",
          codePostal: "75008",
        },
      },
      etat: "Livré",
      poids: "2kg",
      fragile: false,
    },
    {
      id: 2,
      adresse: "Paris, 75008",
      date: "2023-06-16",
      photo: IMG,
      title: "annonces-4",
      prix: 350,
      trajet: {
        depart: {
          ville: "Tunis",
          codePostal: "1001",
        },
        arrivee: {
          ville: "Paris",
          codePostal: "75008",
        },
      },
      etat: "Livré",
      poids: "2kg",
      fragile: false,
    },
  ]); // State to store annonces
  const [error, setError] = useState(null); // Error state to handle issues with data fetching
  const [loading, setLoading] = useState(false); // Loading state to handle the async nature of the request

  const fetchAnnonces = async () => {
    try {
      const response = await getData(API_ENDPOINTS.GET_Annonces); // Fetch the JSON data
      if (response) {
        setAnnonces(response); // Assuming the API response has "annonces" key
      } else {
        setError("Invalid response format"); // Error handling if the structure is not as expected
      }
    } catch (err) {
      setError(err.message); // Catching errors and updating state
    } finally {
      setLoading(false); // Setting loading to false after the request completes
    }
  };

  // useEffect(() => {
  //   fetchAnnonces();
  //   console.log(annonces);
  // }, [annonces]);

  const getEtatColor = (etat) => {
    switch (etat) {
      case "En cours":
        return "bg-yellow-500";
      case "Livré":
        return "bg-green-500";
      case "Annulé":
        return "bg-red-500";
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const options = {
      day: "numeric",
      month: "short",
    };
    return d.toLocaleDateString("fr-FR", options);
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return (
      <div className="container w-full p-2 lg:px-[20%] mt-10">
        <Card
          name="Mes annonces"
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
          <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
            Error: {error}
          </h1>
          <div className="mt-5 text-center">
            <Button buttonName="Ajouter une Annonces!" />
          </div>
        </div>
      </div>
    ); // Display error if something goes wrong
  }
  return (
    <div className="container w-full p-2 lg:px-[20%] mt-10">
      <Card
        name="Mes annonces"
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
      <div className="bg-gray-50 border p-2 rounded mt-8 flex flex-col items-center justify-center space-y-4">
        {annonces.length > 0 ? (
          annonces.map((annonce) => (
            <Link
              to={`/mes-annonces/${annonce.title}/${annonce.id}`}
              key={annonce.id}
              className="border border-black bg-white rounded-lg overflow-hidden relative flex flex-col sm:flex-row items-center"
            >
              <div className="hidden sm:block sm:w-48 p-2 flex justify-center items-center">
                <img
                  src={annonce.photo}
                  alt={`Livraison pour ${annonce.adresse}`}
                  className="w-40 h-40 object-cover rounded-md"
                />
              </div>
              <div className="flex-1 p-4 w-full sm:w-auto">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl text-gray-700 truncate md:w-[400px] sm:w-[300px] w-[200px]">
                    {annonce.title}
                  </h3>
                  <div className="flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full ${getEtatColor(
                        annonce.etat
                      )} mr-2`}
                    ></div>
                    <span className="text-sm font-medium">{annonce.etat}</span>
                  </div>
                </div>
                <div className="space-y-1 mb-4 mt-4">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold w-8 text-gray-500">DE</span>
                    <span>
                      {annonce.trajet.depart.ville},{" "}
                      {annonce.trajet.depart.codePostal}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-semibold w-8 text-gray-500">À</span>
                    <span>
                      {annonce.trajet.arrivee.ville},{" "}
                      {annonce.trajet.arrivee.codePostal}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{annonce.prix}$</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-3 text-gray-500" />
                    <span>
                      Entre le {formatDate(annonce.date)} et le 13 nov.
                    </span>
                  </div>
                </div>

                {/* Badges - Bottom Right of Each Card */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {/* Badge Taille */}
                  <span className="bg-yellow-300 text-yellow-600 rounded-md text-xs font-semibold px-2.5 py-0.5">
                    {annonce.poids === "0.5kg"
                      ? "S"
                      : annonce.poids === "2kg"
                      ? "L"
                      : "M"}
                  </span>

                  {/* Badge Personnes */}
                  <span className="bg-gray-100 rounded-md text-gray-800 text-xs font-semibold px-2.5 py-0.5 flex items-center">
                    {annonce.fragile ? (
                      <User className="w-3 h-3 mr-1" />
                    ) : (
                      <Users className="w-3 h-3 mr-1" />
                    )}
                    {annonce.fragile ? "1 Pers" : "2 Pers"}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>
            <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
              Voudrais-tu être celui qui brise ce silence en créant une annonce
              ?
            </h1>
            <div className="mt-5 text-center">
              <Button buttonName="Ajouter une Annonces!" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Annonces;
