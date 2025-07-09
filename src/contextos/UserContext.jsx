import { createContext, useState, useContext } from "react";

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const [usuario, setUsuario] = useState(null);
    const [usuarios, setUsuarios] = useState(
      [
        {
          id:1,
          esAdmin:true,
          nombre:"dev",
          apellido:"android",
          email:"dev",
          contrasena:"info"
        }
      ]
      );
    const [compras, setCompras] = useState([]);

      const agregarCompra = (nuevaCompra) => {
        const compraConIdYFecha = {
          id: compras.length + 1,
          ...nuevaCompra,
          fecha: new Date()
        };
        setCompras((prev) => [...prev, compraConIdYFecha]);
      };
      
      return (
        <UserContext.Provider
          value={{
            usuario,
            setUsuario,
            usuarios,
            setUsuarios,
            compras,
            agregarCompra,
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };
    