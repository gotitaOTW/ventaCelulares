import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../contextos/UserContext";
import '../estilos/Home.css';



const Home = () => {
  const { usuario } = useContext(UserContext);

  if (usuario) {
    return (
    <div className="home-container">
      <div className="welcome-box">
        <h1 className="titulo-bienvenida">¡Bienvenido/a, {usuario.nombre}!</h1>
        <p className="subtitulo-bienvenida">¿Qué estás buscando hoy?</p>
        <Link to="/catalogo">
            <button className="botonCatalogo">Ver catálogo</button>
            </Link>
      </div>
   </div>
    );
  }
    return (
    <div className="home">
      <div className="imagenFondo">

        <div className="textoSobreImagen">
          <h1>Descubrí los mejores celulares al mejor precio</h1>
          <p>Con garantía, envíos rápidos y atención personalizada</p>
          <Link to="/catalogo">
            <button className="botonCatalogo">Ver catálogo</button>
            </Link>
        </div>
      </div>

      <div className="beneficios">

        <h2>¿Por qué elegirnos?</h2>
        <div className="filaBeneficios">

          <div className="itemBeneficio">
            <span>🚚</span>
            <p>Envío gratis a todo el país</p>
          </div>

        <div className="itemBeneficio">
            <span>📱</span>
                 <p>Últimos modelos disponibles</p>
          </div>

          <div className="itemBeneficio">
            <span>💳</span>
            <p>Hasta 12 cuotas sin interés</p>
          </div>

             <div className="itemBeneficio">
            <span>🔒</span>
    <p>Compra 100% segura</p>
          </div>
        </div>

      </div>

      <div className="resenas">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="resena">
          <p>"Compré un iPhone y llegó en 48 horas. Todo perfecto!"</p>
          <span>- Camila R.</span>
        </div>
        <div className="resena">
          <p>"Excelente atención y el celular impecable, muy recomendable."</p>
          <span>- Lautaro G.</span>
        </div>
        <div className="resena">
          <p>"Tenía dudas, pero respondieron rápido y todo salió genial."</p>
          <span>- Micaela T.</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
