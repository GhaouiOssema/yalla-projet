import Card from "../MesCard/Card";
import { getData } from "../../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../../components/apiAndFunction/apiEndpoints";
import { MapPin, Clock } from "lucide-react";
import Button from "../../components/forms/Button";
import IMG from "../../assets/aa.png";

import { useEffect, useState } from "react";
import LivraisonsCard from "./LivraisonsCard";
const MesLivraisons = () => {
    const [livraisons, setLivraisons] = useState([
        // {
        //     id: 1,
        //     schedule: "Tous les lundis, mardis et mercredis",
        //     vehicleType: "Petite voiture (coffre de moins de 200L)",
        //     isRegular: true,
        //     allerRetour: false,
        //     receiverName: "Jane Smith",
        //     departure: {
        //         city: "Versailles",
        //         postalCode: "78000",
        //         country: "France",
        //     },
        //     arrival: {
        //         city: "Albarracín",
        //         postalCode: "44100",
        //         country: "Espagne",
        //     },
        //     stops: 0,
        //     price: 700,
        //     isActive: true,
        //     maxPackageSize: "XL",
        //     status: "livré",
        //     deliveryDate: "2024-10-16",
        // },
        {
            title: "livraison-1",
            status: "En cours",
            photo: IMG,
            id: 1,
            schedule: "Tous les lundis, mardis et mercredis",
            vehicleType: "Petite voiture (coffre de moins de 200L)",
            isRegular: true,
            allerRetour: false,
            receiverName: "Jane Smith",
            deliveryDate: "2024-10-16",
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
            stops: 0,
            prix: 700,
            isActive: true,
            maxPackageSize: "XL",
        },
    ]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const fetchLivraisons = async () => {
        try {
            const response = await getData("");
            if (response) {
                setLivraisons(response);
            } else {
                setError("Invalid response format");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     fetchLivraisons();
    //     console.log(livraisons);
    // }, [livraisons]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (error) {
        return (
            <div className="w-full min-h-screen  overflow-hidden  lg:mt-0 mt-5 xl:p-16 lg:p-12 p-2 ">
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
        <div className="w-full min-h-screen  overflow-hidden  lg:mt-0 mt-5 xl:p-16 lg:p-12 p-2 ">
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
            {/* Last Section */}
            <div className=" space-y-4  mt-4">
                {livraisons.length > 0 ? (
                    livraisons.map((props, idx) => (
                        <div
                            key={idx}
                            className=" border  bg-white rounded-lg overflow-hidden relative flex flex-col sm:flex-row items-center">
                            <LivraisonsCard
                                key={idx}
                                setIsOpen={setIsOpen}
                                {...props}
                            />
                        </div>
                    ))
                ) : (
                    <div>
                        <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
                            Oups, tu n as pas encore de livraison. allons
                            chercher une ?
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
