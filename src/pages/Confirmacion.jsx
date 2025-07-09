import React from "react";
import { useParams } from "react-router-dom";
import { celulares } from "../data/data";
import '../estilos/Confirmacion.css';

const Confirmacion = () => {
  const { idCelu } = useParams();
  const celu = celulares.find(cel => cel.id === parseInt(idCelu));
  
  if (!celu) {
    return <h1>Celular no encontrado!</h1>;
  }
  
  return (
    <>
      <h1>{celu.modelo} comprado con éxito!</h1>
    </>
  );
};

export default Confirmacion;
