// src/pages/Setting.jsx

import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Carrousel from "@/components/ui/carrousel";
import {
  Package,
  Maximize2,
  FlagTriangleRight,
  ArrowDownToDot,
  ArrowUpFromDot,
  CalendarDays,
  Tag,
  AlertCircle,
} from "lucide-react"; // Import the Flag icon from lucide-react

const Setting = () => {
  const image = "@/assets/Asset1.png"; // Image path

  return (
    <Card className="w-full max-w-4xl mx-auto sm:p-2 md:p-3 lg:p-4 ">
      <CardHeader className=" px-3 sm:px-4 relative  mt-3 border-b">
        <div className="flex items-baseline justify-between mb-3 ">
          <nav className="flex text-md font-medium">
            <span className="text-gray-300 ">1. Récapitulatif</span>
          </nav>
          {/* Flag Icon positioned top-right with yellow-500 color */}
          <div className=" top-2 right-2 text-yellow-500 border border-yellow-500 rounded-lg p-1 w-8 h-8 flex items-center justify-center">
            <FlagTriangleRight /> {/* Use the Flag icon from lucide-react */}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 px-2 sm:px-4">
        <div className="space-y-1 mb-3">
          {/* Title and Price in one row */}
          <div className="flex justify-between items-center text-xl font-semibold text-gray-900">
            <span className="font-bold text-3xl text-gray-700 truncate md:w-[400px] sm:w-[300px] w-[200px]">
              1 Ordinateur de bureau, fixe
            </span>
            <span className="text-2xl text-yellow-500 font-bold">120,00 €</span>
          </div>
          {/* Weight, Format, and Expiration Date in a single column */}
          <div className="flex flex-col text-sm text-gray-500 space-y-1 mt-1"></div>
        </div>
        <div className="relative mb-4">
          <Carrousel assetImage={image} />
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-3">
          <div className="flex-1 space-y-3  border rounded-lg  p-3  w-full">
            {/* Departure */}
            <div className="  flex flex-col  sm:flex-row sm:items-center sm:space-x-2 ">
              <div className="flex items-center  w-full  ">
                <div className=" flex items-center justify-center px-5">
                  <ArrowUpFromDot className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="">
                  <div>Départ :</div>
                  <div className="font-medium"> Montpellier - 34000</div>
                  <div className="text-sm text-gray-500">
                    Collecte au pied du véhicule
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-300 w-full mx-auto sm:mx-0"></div>
            {/* Arrival */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <div className="flex items-center w-full">
                <div className="  flex items-center justify-center px-5">
                  <ArrowDownToDot className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="">
                  <div>Arrivée :</div>
                  <div>
                    <div className="font-medium"> Cannes - 06400</div>
                    <div className="text-sm text-gray-500">
                      Livraison au pied du véhicule
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1  h-32 w-full">
            <div className="space-y-3 mb-3">
              {/* Informations sur le poids et le format */}
              <div className="flex items-center">
                <Package className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Entre 5 et 30kg</span>
              </div>

              <div className="flex items-center">
                <Maximize2 className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>M</span>
              </div>

              {/* Information de date */}
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-1 flex-shrink-0" />{" "}
                <span>Entre le 30 nov et le 15 juin</span>
              </div>

              {/* Catégorie : Matériel informatique */}
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Matériel informatique</span>
              </div>

              {/* Badge Urgent */}
              <div className="flex items-center text-red-500">
                <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Urgent</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-3  items-center justify-center mb-4 mt-3  ">
          <Button
            variant="outline"
            className="w-full bg-yellow-50 text-yellow-500 font-medium border hover:bg-gray-100 border-yellow-300"
          >
            Discuter
          </Button>
          <Button className="w-full bg-yellow-500 text-white font-medium hover:bg-yellow-600">
            Me proposer
          </Button>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-200 py-2 px-2 sm:px-4 ">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
          <div className="flex items-center space-x-3 mb-2 sm:mb-0">
            <Avatar className="w-10 h-10 bg-blue-100 text-blue-600">
              <span className="text-lg font-medium">RM</span>
            </Avatar>
            <div>
              <div className="font-medium text-lg">Remi M.</div>
              <div className="text-sm text-gray-500">Particulier</div>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-800 px-0 sm:px-2"
          >
            Afficher le profil
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Setting;
