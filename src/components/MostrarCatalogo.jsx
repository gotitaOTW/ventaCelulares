import React from "react";
import {Link} from 'react-router-dom'

const MostrarCatalogo = (props) => {
  return (
    <div className="catalogo">
      {props.catalogo.map((celu, index) => (
        <div className="cardCelu" key={index}>
          <div className="card-inner">
            <div className="card-front">
              <img src={celu.fotos[0]} alt={celu.fotos[0]} className="fotoCelu" />
              <div className="datos">
                <div className="fila">
                    <p className="modelo">{celu.modelo}</p>
                    <p className="precio">${celu.precio}</p>
                </div>
                <p className="descripcionCorta">{celu.descripcion}</p>
                </div>
            </div>

            <div className="card-back">
              <p className="descripcionLarga">{celu.descripcionLarga}</p>
              <Link to={`/catalogo/${celu.id}`}>
                    <button className="botonVerMas" type="button">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostrarCatalogo;
