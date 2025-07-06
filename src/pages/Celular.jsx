import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { celulares } from "../data/data";

const Celular = () => {
    const {idCelu}=useParams();
    const celu=celulares.find(cel=>cel.id==parseInt(idCelu));
    const [indiceFoto, setIndiceFoto] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndiceFoto((prev) => (prev + 1) % celu.fotos.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="celular-container">
        <div className="celular-carousel">
          <img
            src={celu.fotos[indiceFoto]}
            alt={`Foto ${indiceFoto + 1}`}
            className="celular-imagen"
          />
        </div>
  
        <div className="celular-info">
          <div>
            <h1 className="celular-modelo">{celu.modelo}</h1>
            <p className="celular-precio">${celu.precio}</p>
          </div>
  
          <div className="celular-especificaciones">
            {celu.especificaciones.map((esp, i) => (
              <div key={i} className="especificacion-item">
                <span className="especificacion-icono">{esp.icono}</span>
                <div>
                  <strong>{esp.nombre}:</strong> {esp.texto}
                </div>
              </div>
            ))}
          </div>
  
          <button
            className="boton-comprar"
          >
            Comprar
          </button>
        </div>
      </div>
    );
  };

export default Celular