import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { celulares } from "../data/data";
import { Link } from "react-router-dom";
import '../estilos/Celular.css';



const Celular = () => {
    const {idCelu}=useParams();
    const celu=celulares.find(cel=>cel.id==parseInt(idCelu));
    if (!celu) {
      return <h1>Celular no encontrado!</h1>;
    }
    const [indiceFoto, setIndiceFoto] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndiceFoto((prev) => (prev + 1) % celu.fotos.length);
      }, 2500);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="celular-container">
        <div className="celular-carousel">
        {celu.fotos[indiceFoto] && (
          <img src={celu.fotos[indiceFoto]} 
            alt="celular"  
            className="celular-imagen"
          />
        )}
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

              <Link to={`/comprar/${celu.id}`}>
                <button
            className="boton-comprar"
          >
            Comprar
          </button>
              </Link>
          
        </div>
      </div>
    );
  };

export default Celular