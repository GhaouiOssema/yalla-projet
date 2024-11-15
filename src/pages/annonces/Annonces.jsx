import Card from "../MesCard/Card";
import { getData } from "../../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../../components/apiAndFunction/apiEndpoints";
import { useState } from "react";
import Button from "../../components/forms/Button";
import IMG from "../../assets/aa.png";
import AnnonceCard from "./AnnonceCard";
import { DeleteButton } from "../../components";

const Annonces = () => {
    const [annonces, setAnnonces] = useState([
        {
            id: 0,
            adresse: "Paris, 75008",
            title: "annonces-1",
            dateFull: true,
            dateF: "15 juin",
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
            etat: "En ligne",
            poids: "2kg",
            fragile: false,
            categorie: "cat1",
            size: "S",
        },
        {
            id: 1,
            adresse: "Paris, 75008",
            title: "annonces-2",
            dateFull: true,
            dateF: "6 aout",
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
            etat: "En cours",
            poids: "2kg",
            fragile: false,
            // ou
            categorie: "cat2",
            size: "10 x 20 x 30",
            dim: true,
        },
        {
            id: 2,
            adresse: "Paris, 75008",
            title: "annonces-3",
            dateEntre: true,
            dateE: ["15 juin", "13 nov"],
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
            categorie: "cat3",
            size: "L",
        },
        {
            id: 3,
            adresse: "Paris, 75008",
            avantDate: true,
            dateA: "15 juin",
            photo: IMG,
            title: "annonces-5",
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
            etat: "expiréé ",
            poids: "2kg",
            fragile: false,
            categorie: "cat4",
            size: "XL",
        },
        {
            id: 4,
            adresse: "Paris, 75008",
            avantDate: true,
            dateA: "15 juin",
            photo: IMG,
            title: "annonces-5",
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
            etat: "expiréé ",
            poids: "2kg",
            fragile: false,
            categorie: "cat5",
            size: "2XL",
        },
    ]);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchAnnonces = async () => {
        try {
            const response = await getData(""); // Fetch the JSON data
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

    const formatDate = (date) => {
        const d = new Date(date);
        const options = {
            day: "numeric",
            month: "short",
        };
        return d.toLocaleDateString("fr-FR", options);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div className="w-full min-h-screen  overflow-hidden  lg:mt-0 mt-5 xl:p-16 lg:p-12 p-2 ">
                <Card
                    name="Mes annonces"
                    subname="Consultez et gérez l'ensemble de vos annonces publiées ici"
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
        );
    }
    return (
        <>
            <DeleteButton
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                text={
                    "Êtes-vous sûr de vouloir supprimer cette annonce ? Cette action est irréversible."
                }
            />

            <div className=" w-full min-h-screen  overflow-hidden  lg:mt-0 mt-5 xl:p-16 lg:p-12 p-2">
                <Card
                    name="Mes annonces"
                    subname="Consultez et gérez l'ensemble de vos annonces publiées ici "
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
                <div className=" space-y-4  mt-4">
                    {annonces.length > 0 ? (
                        annonces.map((props, idx) => (
                            <div
                                key={idx}
                                className=" border  bg-white rounded-lg overflow-hidden relative flex flex-col sm:flex-row items-center">
                                <AnnonceCard
                                    key={idx}
                                    setIsOpen={setIsOpen}
                                    {...props}
                                />
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
                                Voudrais-tu être celui qui brise ce silence en
                                créant une annonce ?
                            </h1>
                            <div className="mt-5 text-center">
                                <Button buttonName="Ajouter une Annonces!" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Annonces;
