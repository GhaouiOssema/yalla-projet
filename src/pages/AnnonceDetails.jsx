import React from "react";
import { useParams } from "react-router-dom";

const AnnonceDetails = () => {
  const { title, id } = useParams();
  return (
    <div>
      <h1>TITRE : {title} </h1>
      <h1>ID : {id} </h1>
    </div>
  );
};

export default AnnonceDetails;
