import Button from "../../components/forms/Button";
import { useState } from "react";
import { Repeat, FilePenLine, Trash2, Package } from "lucide-react";
import Card from "../MesCard/Card";
import TrajetCard from "./TrajetCard";
import { DeleteButton } from "../../components";

const Trajet = () => {
    // Static data for routes
    const trajets = [
        {
            id: 1,
            schedule: "Tous les lundis, mardis et mercredis",
            vehicleType: "Petite voiture (coffre de moins de 200L)",
            isRegular: true,
            allerRetour: false,
            departure: {
                city: "Versailles",
                postalCode: "78000",
                country: "France",
            },
            arrival: {
                city: "Albarracín",
                postalCode: "44100",
                country: "Espagne",
            },
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
            departure: {
                city: "Paris",
                postalCode: "75000",
                country: "France",
            },
            arrival: {
                city: "Madrid",
                postalCode: "28000",
                country: "Espagne",
            },
            stops: 0,
            price: 500,
            isActive: true,
            allerRetour: true,
            maxPackageSize: "L",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

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
        <>
            <DeleteButton
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                text={
                    "Êtes-vous sûr de vouloir supprimer ce trajet ? Cette action est irréversible."
                }
            />
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
                <div className="w-full rounded mt-8 flex flex-col items-center justify-center ">
                    {trajets.length > 0 ? (
                        trajets.map((props, idx) => (
                            <TrajetCard
                                key={idx}
                                setIsOpen={setIsOpen}
                                {...props}
                            />
                        ))
                    ) : (
                        <div>
                            <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
                                Tu n'as pas créé de trajet depuis un moment.
                                Créons-en un maintenant, c'est le moment de
                                voyager !
                            </h1>
                            <div className="mt-5 text-center">
                                <Button buttonName="Chercher un trajet!" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Trajet;
