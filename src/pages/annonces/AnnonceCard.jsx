import {
    FilePenLine,
    Trash2,
    Package,
    Calendar,
    Ruler,
    Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    CustomeBadge,
    DateBadge,
    DeleteButtonIcon,
    ModifyButton,
    StatusBadges,
} from "../../components";

const AnnonceCard = ({
    id,
    trajet,
    stops,
    setIsOpen,
    adresse,
    photo,
    title,
    etat,
    dateEntre,
    avantDate,
    dateFull,
    dateF,
    dateE,
    size,
    dateA,
    categorie,
    dim,
    prix,
}) => {
    return (
        <div key={id} className="w-full bg-white rounded-lg  p-3">
            <div className="w-full relative">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Link
                            to={`/mes-annonces/${title}/${id}`}
                            className=" hidden sm:block p-2 md:flex justify-center items-center ">
                            <img
                                src={photo}
                                alt={`Livraison pour ${adresse}`}
                                className="hiddem md:flex w-auto h-40 object-contain rounded-lg"
                            />
                        </Link>
                        <div className="h-full w-full flex flex-col gap-4 ">
                            <div className=" flex items-center justify-between">
                                <div className="text-lg font-semibold text-primary">
                                    {title}
                                </div>
                                <div>
                                    {etat === "Livré" ? (
                                        <StatusBadges
                                            text={etat}
                                            className="bg-emerald-500"
                                        />
                                    ) : etat === "En ligne" ? (
                                        <StatusBadges
                                            text={etat}
                                            className="bg-green-400"
                                        />
                                    ) : etat === "En cours" ? (
                                        <StatusBadges
                                            text={etat}
                                            className="bg-yellow-500"
                                        />
                                    ) : etat === "expiréé " ? (
                                        <StatusBadges
                                            text={etat}
                                            className="bg-red-500"
                                        />
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className=" sm:w-full w-fit flex items-center gap-2 mr-2  overflow-x-auto sm:overflow-x-hidden scrollbar-hide  scrollbar-hide  ">
                                    {dateFull ? (
                                        <DateBadge
                                            Icon={Calendar}
                                            date={dateF}
                                        />
                                    ) : avantDate ? (
                                        <DateBadge
                                            Icon={Calendar}
                                            date={dateA}
                                            condition="avant"
                                        />
                                    ) : dateEntre ? (
                                        <DateBadge
                                            Icon={Calendar}
                                            date={dateE}
                                            condition="entre"
                                        />
                                    ) : null}

                                    {size && (
                                        <CustomeBadge
                                            text={dim ? `${size}cm` : size}
                                            Icon={dim ? Ruler : Package}
                                        />
                                    )}

                                    {categorie && (
                                        <CustomeBadge
                                            text={categorie}
                                            Icon={Layers3}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="relative flex flex-col items-center">
                                    <div className="rounded-full w-4 h-4 bg-gray-500 flex items-center justify-center">
                                        <div className="rounded-full w-3/4 h-3/4 bg-white flex items-center justify-center">
                                            <div className="rounded-full w-1/2 h-1/2 bg-gray-500" />
                                        </div>
                                    </div>
                                    <div
                                        className="flex-1 w-0.5 bg-gray-500"
                                        style={{
                                            height: "calc(100% - 2rem)",
                                        }}
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
                                            {trajet?.depart.codePostal},
                                            {trajet?.depart.ville},
                                        </span>
                                    </div>
                                    {stops > 0 && (
                                        <div className="text-sm text-muted-foreground ml-4">
                                            Via {stops} étape
                                            {stops > 1 ? "s" : ""}
                                        </div>
                                    )}
                                    <div className="flex items-center">
                                        <span className="text-sm font-medium">
                                            {trajet?.depart.codePostal},
                                            {trajet?.depart.ville},
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between ">
                                <div className="flex items-center justify-start gap-2 text-sm">
                                    <span className="text-base font-bold">
                                        {prix}€
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <ModifyButton Icon={FilePenLine} />
                                    <DeleteButtonIcon
                                        Icon={Trash2}
                                        setIsOpen={setIsOpen}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnonceCard;
