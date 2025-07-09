import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../contextos/UserContext";
import '../estilos/Comprar.css';
import { celulares } from "../data/data";
import { useEffect } from "react";

const Comprar = () => {
  const { idCelu } = useParams();
  const navigate = useNavigate();
  const { usuario, agregarCompra } = useContext(UserContext);

  const celular = celulares.find(c => c.id === parseInt(idCelu));
  const [metodoDePago, setMetodoDePago] = useState("Tarjeta");
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (!usuario) {
      navigate("/CrearCuenta");
    }
  }, [usuario, navigate]);

  if (!usuario) {
    return null;
  }

  if (!celular) {
    return <h1>Celular no encontrado</h1>;
  }

  const precioTotal = celular.precio * cantidad;

  const confirmarCompra = () => {
    agregarCompra({
      idUsuario: usuario.id,
      idCelu: celular.id,
      metodoDePago,
      cantidad
    });
    navigate(`/confirmacion/${idCelu}`);
  };

  return (
    <div className="comprar-container">
      <h2>Resumen de compra</h2>
      <img src={celular.fotos[0]} alt={celular.modelo} className="foto-preview" />
      <p><strong>Modelo:</strong> {celular.modelo}</p>
      <p><strong>Precio unitario:</strong> ${celular.precio}</p>

      <label>Método de pago:</label>
      <select value={metodoDePago} onChange={(e) => setMetodoDePago(e.target.value)}>
        <option value="Tarjeta">Tarjeta</option>
        <option value="Transferencia">Transferencia</option>
        <option value="Efectivo">Efectivo</option>
      </select>

      <label>Cantidad:</label>
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={(e) => setCantidad(parseInt(e.target.value))}
      />

      <p><strong>Total:</strong> ${precioTotal}</p>

      <button onClick={confirmarCompra}>Confirmar compra</button>
    </div>
  );
};

export default Comprar;
