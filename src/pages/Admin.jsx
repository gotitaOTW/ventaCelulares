import React from "react"
import { useContext } from "react";
import { UserContext } from "../contextos/UserContext";
import '../estilos/Admin.css';
import { celulares } from "../data/data";


const Admin =()=>{
  const { usuario } = useContext(UserContext);
  const { compras, usuarios } = useContext(UserContext);
  if(!usuario.esAdmin){
    return <h1>Apartado para administradores</h1>
  }
  if (!compras || compras.length === 0) {
    return <h2 className="admin-vacio">No hay compras registradas.</h2>;
  }
    return(
        <>
            <div className="admin-contenedor">
      <h2>Compras registradas</h2>
      {compras.map((compra) => {
        const usuario = usuarios.find(u => u.id === compra.idUsuario);
        const celular = celulares.find(c => c.id === compra.idCelu);

        return (
          <div key={compra.id} className="admin-compra">
            <p><strong>Usuario:</strong> {usuario ? `${usuario.nombre} ${usuario.apellido}` : "Desconocido"}</p>
            <p><strong>Celular:</strong> {celular ? celular.modelo : "Desconocido"}</p>
            <p><strong>Método de pago:</strong> {compra.metodoDePago}</p>
            <p><strong>Cantidad:</strong> {compra.cantidad}</p>
            <p><strong>Fecha:</strong> {new Date(compra.fecha).toLocaleDateString()}</p>
            <p><strong>Hora:</strong> {new Date(compra.fecha).toLocaleTimeString()}</p>
          </div>
        );
      })}
    </div>
        </>
    )
}

export default Admin