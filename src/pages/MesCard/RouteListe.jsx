import Card from './Card'
import Button from "../../components/forms/Button";
import { getData } from '../../components/apiAndFunction/apiService';
import { API_ENDPOINTS } from '../../components/apiAndFunction/apiEndpoints';
import { useEffect, useState } from 'react';
import { MapPin, User, Truck, Clock } from "lucide-react"; // Import icons as needed

function RouteListe() {
  const [routes, setRoutes] = useState([]); // State to store annonces
  const [error, setError] = useState(null); // Error state to handle issues with data fetching
  const [loading, setLoading] = useState(true); // Loading state to handle the async nature of the request

  const fetchRoutes = async () => {
    try {
      const response = await getData(API_ENDPOINTS.GET_Routes); // Fetch the JSON data
      if (response) {
        setRoutes(response); // Assuming the API response has "annonces" key
      } else {
        setError('Invalid response format'); // Error handling if the structure is not as expected
      }
    } catch (err) {
      setError(err.message); // Catching errors and updating state
    } finally {
      setLoading(false); // Setting loading to false after the request completes
    }
  };

  useEffect(() => {
    fetchRoutes();
    console.log(routes);
  }, [routes]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div className="container w-full p-2 lg:px-[20%] mt-10">
       <Card 
        name="Mes trajets" 
        buttonName="Ajouter un trajet!"
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
        Options2 = {[
          { value: "option1", label: "Les plus anciens" },
          { value: "option2", label: "Les plus récents" },
        ]}
        text="Tu n'as pas créé de trajet depuis un moment. Créons-en un maintenant, c'est le moment de voyager !"
      />
       <div>
      <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
      Error: {error}      </h1>
      <div className="mt-5 text-center">
        <Button buttonName="Chercher un trajet!" />
      </div>
    </div>
     
      </div>; // Display error if something goes wrong
  }
  return (
   <div className="container w-full p-2 lg:px-[20%] mt-10">
   <Card 
        name="Mes trajets" 
        buttonName="Ajouter un trajet!"
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
        Options2 = {[
          { value: "option1", label: "Les plus anciens" },
          { value: "option2", label: "Les plus récents" },
        ]}
        text="Tu n'as pas créé de trajet depuis un moment. Créons-en un maintenant, c'est le moment de voyager !"
      />

    {/* Last Section */}
<div className="w-full bg-gray-50 border p-4 rounded mt-8 flex flex-col items-center justify-center"> 
  {routes.length > 0 ? (
    routes.map((trajet) => (
      <div key={trajet.id} className="w-full bg-white rounded-lg shadow-md p-6 mb-4">
        <div className="flex items-start">
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-yellow-500 font-semibold text-lg">
                  <MapPin size={16} className="inline mr-1" />
                  Trajet: {trajet.startLocation} to {trajet.endLocation}
                </h2>
                <div className="text-gray-600 text-sm mt-1 flex items-center">
                  <User size={16} className="mr-1" />
                  <span>Driver: {trajet.driver}</span>
                </div>
                <div className="text-gray-600 text-sm mt-1 flex items-center">
                  <Truck size={16} className="mr-1" />
                  <span>Vehicle: {trajet.vehicle}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <div className="flex flex-col items-end">
                  <span className="font-bold">{new Date(trajet.departureTime).toLocaleString()}</span>
                  <span>{new Date(trajet.arrivalTime).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div>
      <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
        Tu n'as pas créé de trajet depuis un moment. Créons-en un maintenant, c'est le moment de voyager !
      </h1>
      <div className="mt-5 text-center">
        <Button buttonName="Chercher un trajet!" />
      </div>
    </div>
  )}
</div>

   </div>


  )
}

export default RouteListe