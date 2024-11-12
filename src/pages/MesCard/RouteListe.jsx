import Card from "./Card";
import Button from "../../components/forms/Button";
import { useState } from "react";
import { Repeat, FilePenLine, Trash2, Package } from "lucide-react";

function RouteListe() {
  // Static data for routes
  const staticRoutes = [
    {
      id: 1,
      schedule: "Tous les lundis, mardis et mercredis",
      vehicleType: "Petite voiture (coffre de moins de 200L)",
      isRegular: true,
      departure: { city: "Versailles", postalCode: "78000", country: "France" },
      arrival: { city: "Albarracín", postalCode: "44100", country: "Espagne" },
      stops: 1,
      price: 700,
      isActive: true,
      maxPackageSize: "XL",
    },
    {
      id: 2,
      schedule: "Tous les samedis",
      vehicleType: "Grande voiture (coffre de plus de 400L)",
      isRegular: false,
      departure: { city: "Paris", postalCode: "75000", country: "France" },
      arrival: { city: "Madrid", postalCode: "28000", country: "Espagne" },
      stops: 0,
      price: 500,
      isActive: true,
      maxPackageSize: "L",
    },
    // Add more static data if needed
  ];

  const [error, setError] = useState(null);

  if (error) {
    return (
      <div className="w-full min-h-screen overflow-hidden lg:mt-0 mt-5 xl:p-16 lg:p-12 p-2">
        <Card
          name="Mes trajets"
          subname="Consultez et gérez l'ensemble de vos trajets publiés ici"
          buttonName="Ajouter un trajet!"
          firstSelectOptions={[
            { value: "1", label: "Toutes mes annonces" },
            { value: "2", label: "En attente de paiement" },
            { value: "3", label: "En attente de disponibilités" },
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
          text="Tu n'as pas créé de trajet depuis un moment. Créons-en un maintenant, c'est le moment de voyager !"
        />
        <div>
          <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
            Error: {error}{" "}
          </h1>
          <div className="mt-5 text-center">
            <Button buttonName="Chercher un trajet!" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen overflow-hidden lg:mt-0 mt-5 xl:p-16 lg:p-12 p-2">
      <Card
        name="Mes trajets"
        subname="Consultez et gérez l'ensemble de vos trajets publiés ici"
        buttonName="Ajouter un trajet!"
        firstSelectOptions={[
          { value: "1", label: "Toutes mes annonces" },
          { value: "2", label: "En attente de paiement" },
          { value: "3", label: "En attente de disponibilités" },
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
        text="Tu n'as pas créé de trajet depuis un moment. Créons-en un maintenant, c'est le moment de voyager !"
      />

      {/* Last Section: Route Details with Direct Badge Replacement */}
      <div className="w-full p-4 rounded mt-8 flex flex-col items-center justify-center border bg-gray-50">
        {staticRoutes.length > 0 ? (
          staticRoutes.map((route) => (
            <div
              key={route.id}
              className="w-full bg-white rounded-lg border p-6 mb-4"
            >
              <div className="w-full relative">
                <div className="pb-3">
                  <div className="text-lg font-semibold text-primary">
                    {route.schedule} - {route.vehicleType}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {route.isRegular && (
                        <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1">
                          <Repeat className="h-3 w-3" /> Trajet régulier
                        </span>
                      )}
                      <span className="bg-gray-100 text-xs text-gray-600 py-1 px-2 rounded-full flex items-center gap-1">
                        <Package className="h-3 w-3" /> Max:{" "}
                        {route.maxPackageSize}
                      </span>
                    </div>
                    {route.isActive && (
                      <span className="bg-emerald-500 text-white text-xs py-1 px-2 rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="flex">
                    <div className="relative flex flex-col items-center">
                      <div className="rounded-full w-4 h-4 bg-gray-500 flex items-center justify-center">
                        <div className="rounded-full w-3/4 h-3/4 bg-white flex items-center justify-center">
                          <div className="rounded-full w-1/2 h-1/2 bg-gray-500" />
                        </div>
                      </div>
                      <div
                        className="flex-1 w-0.5 bg-gray-500"
                        style={{ height: "calc(100% - 2rem)" }}
                      />
                      <div className="relative rounded-full w-4 h-4 bg-gray-500 flex items-center justify-center">
                        <div className="rounded-full w-3/4 h-3/4 bg-white flex items-center justify-center">
                          <div className="rounded-full w-1/2 h-1/2 bg-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 space-y-3 flex-1">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">
                          {route.departure.postalCode}, {route.departure.city},{" "}
                          {route.departure.country}
                        </span>
                      </div>
                      {route.stops > 0 && (
                        <div className="text-sm text-muted-foreground ml-4">
                          Via {route.stops} étape{route.stops > 1 ? "s" : ""}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="text-sm font-medium">
                          {route.arrival.postalCode}, {route.arrival.city},{" "}
                          {route.arrival.country}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm">
                      A partir de :{" "}
                      <span className="font-semibold">{route.price}€</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-4 flex space-x-2">
                  <button className="bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full p-2">
                    <FilePenLine className="w-5 h-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-600 p-2">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
              Tu n'as pas créé de trajet depuis un moment. Créons-en un
              maintenant, c'est le moment de voyager !
            </h1>
            <div className="mt-5 text-center">
              <Button buttonName="Chercher un trajet!" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RouteListe;
