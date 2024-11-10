import React, { useEffect, useState } from "react";
import { carouselTitle, data1, tabs } from "../utils/DashboardData";
import { LuPackagePlus } from "react-icons/lu";
import {
  AccordionSection,
  Carousel,
  MidumeCardLayout,
  NotificationCard,
  SmallCardLayout,
} from "../components";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DashboardCard from "../components/DashboardCard";

const Dashboard = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {
        //change the style to css file for better clearity
      }
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
      </style>

      <div className="  w-full min-h-screen flex  overflow-hidden xl:p-16 lg:p-12 p-2     ">
        <div
          className={`lg:grid lg:grid-cols-3 lg:gap-7 w-full grid grid-cols-1`}
        >
          <div className={`col-span-2 flex flex-col`}>
            <div className="flex flex-col items-center justify-between">
              <div className="w-full  h-fit rounded-lg  mb-4 p-5 flex items-center">
                <div className="flex items-center justify-start flex-grow">
                  <div className="ml-4">
                    <h1 className="text-[20px]">Mardi, 07 Mai</h1>
                    <h1 className="text-[36px]  font-merriweather">
                      Salut! Yialla T.
                    </h1>
                  </div>
                </div>

                <div>
                  <h1 className="text-[60px] mr-4 animate-bounce">👋</h1>
                </div>
              </div>
            </div>

            <div
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              className="text-center  flex flex-col"
            >
              <div className=" h-1/2 ">
                {" "}
                <DashboardCard
                  header={"Mes annonces en cours"}
                  path={"/notifications"}
                  text={"Aucune annonces n'a ete crée"}
                  buttonText={"Ajouter une annonce"}
                  link={"/mes-annonces"}
                />
              </div>
              <div className=" h-1/2">
                <DashboardCard
                  header={"Mes trajets en cours"}
                  path={"/trajets"}
                  text={"Aucune trajets n'a ete crée"}
                  buttonText={"Ajouter une trajet"}
                  link={"/trajets"}
                />
              </div>
              <div className=" h-1/2">
                <DashboardCard
                  header={"Mes livraisons en cours"}
                  path={"/messages"}
                  text={"Aucune livraisons n'a ete crée"}
                  buttonText={"Ajouter une livraison"}
                  icon={LuPackagePlus}
                  link={"/mes-livraisons"}
                />
              </div>
            </div>
          </div>
          <div className=" col-span-1  w-full h-full     ">
            <div className="flex flex-col w-full h-full    ">
              <div className="w-full h-auto   ">
                <div className="flex ">
                  <div className="w-1/2 h-auto mr-2 mb-2  ">
                    {" "}
                    <SmallCardLayout
                      key={0}
                      sign={data1[0].sign}
                      title={data1[0].title}
                      text={data1[0].text}
                      bg={data1[0].bg}
                      rounded={data1[0].rounded}
                      textColor={data1[0].textColor}
                      firstElement={data1[0].firstElement}
                      textSize={data1[0].textSize}
                    />
                  </div>
                  <div className="w-1/2 h-[120px] ml-2 mb-2 ">
                    {" "}
                    <SmallCardLayout
                      key={1}
                      title={data1[1].title}
                      text={data1[1].text}
                      bg={data1[1].bg}
                      rounded={data1[1].rounded}
                      textColor={data1[1].textColor}
                      firstElement={data1[1].firstElement}
                      textSize={data1[1].textSize}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 h-[120px] mr-2 mt-2 ">
                    {" "}
                    <SmallCardLayout
                      key={2}
                      title={data1[2].title}
                      text={data1[2].text}
                      bg={data1[2].bg}
                      rounded={data1[2].rounded}
                      textColor={data1[2].textColor}
                      firstElement={data1[2].firstElement}
                      textSize={data1[2].textSize}
                    />
                  </div>
                  <div className="w-1/2 h-[120px] ml-2 mt-2">
                    {" "}
                    <SmallCardLayout
                      key={3}
                      sign={data1[3].sign}
                      title={data1[3].title}
                      text={data1[3].text}
                      bg={data1[3].bg}
                      rounded={data1[3].rounded}
                      textColor={data1[3].textColor}
                      firstElement={data1[3].firstElement}
                      textSize={data1[3].textSize}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex-grow mt-4 mb-4  ">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
