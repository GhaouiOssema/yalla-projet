import React from "react";
import UnderlinedButtons from "./UnderlinedButtons";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
const DashboardCard = (props) => {
  return (
    <>
      {" "}
      <div className="w-full   rounded-lg bg-gray-50 p-3 mb-4">
        <div className="   w-full h-full ">
          <div className="   flex justify-between  mt-3  items-center  w-full  ">
            <h1 className="  text-lg ml-4 font-semibold text-yellow-400 ">
              {props.header}
            </h1>
            <MoreVertIcon style={{ fontSize: "25px", color: "gray" }} />
          </div>
          <div className="  w-full h-full flex justify-center items-center flex-col">
            <div className=" mt-3  rounded-lg items-center flex flex-col gap-7 justify-center   ">
              <h1 className="">{props.text}</h1>
              <Link
                className="  whitespace-nowrap shadow-custom hover:bg-yellow-500 min-w-[200px] max-w-[250px] h-auto py-[5%] rounded-lg bg-yellow-400 text-white"
                to={`${props.path}`}
              >
                {props.buttonText}
              </Link>
            </div>
            <div className="   w-full  flex justify-end items-end mt-4 ">
              <Link to={props.link}>
                <p className="cursor-pointer text-sm text-yellow-400 mr-10 mb-3 underline">
                  Voir plus
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
