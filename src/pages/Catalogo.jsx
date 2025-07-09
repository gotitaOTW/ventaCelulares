import React, { use, useEffect, useState, useContext } from "react"
import {celulares} from '../data/data.js';
import {marcas} from '../data/data.js';
import lupa from '../assets/icons/lupa.png';
import MostrarCatalogo from "../components/MostrarCatalogo.jsx";
import { Link, useParams, useLocation } from "react-router-dom";
import '../estilos/Catalogo.css';

const Catalogo = () =>{ 
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nombreMarca = queryParams.get('marca');

  const marcaEncontrada = nombreMarca
    ? marcas.find(m => m.nombre.toLowerCase() === nombreMarca.toLowerCase())
    : null;
  const marcaId = marcaEncontrada ? marcaEncontrada.id : null;
  const [filtrosPorMarca, setFiltrosPorMarca] = useState(
    marcaId ? [marcaEncontrada] : []
  );
    const [celusFiltrados,setCelusFiltrados]=useState(celulares);
    const [FiltroBusqueda,setFiltroBusqueda]=useState("");
    const [filtroOrden,setFiltroOrden]=useState("fechaDesc");
    const filtrosDeOrden = [
        { id: 'fechaDesc', nombre: 'Más reciente' },
        { id: 'fechaAsc', nombre: 'Más antiguo' },
        { id: 'precioAsc', nombre: 'Menor precio' },
        { id: 'precioDesc', nombre: 'Mayor precio' },
        { id: 'recomendado', nombre: 'Recomendado' }
      ];
    
    const activarFiltroBusqueda=(busq)=>{
        setFiltroBusqueda(busq);
    }

    function activarFiltroPorMarca(tildado, marca){
        if(tildado){
            setFiltrosPorMarca([...filtrosPorMarca, marca]);
            
        }
        else{borrarFiltroPorMarca(marca)}
    }

    const borrarFiltroPorMarca=(marca)=>{
        const filtrosActualizados=filtrosPorMarca.filter(filtro=>filtro != marca);
        setFiltrosPorMarca(filtrosActualizados);
    }

    useEffect(() => {
        filtrarArray();
    }, [filtrosPorMarca,FiltroBusqueda,filtroOrden]); 

    useEffect(() => {
        if (marcaId) {
          setCelusFiltrados(celulares.filter(c => c.marcaId === marcaId));
        } else {
          setCelusFiltrados(celulares);
        }
      }, [marcaId]);

    const filtrarArray=()=>{
        let celularesFiltrados=celulares;
        if(filtrosPorMarca.length>0){
           const idsMarca=filtrosPorMarca.map(marca=>marca.id);
           celularesFiltrados=celulares.filter(celu=>idsMarca.includes(celu.marcaId));
        }
        if(FiltroBusqueda!=""){
            console.log(celularesFiltrados);
            celularesFiltrados=celularesFiltrados.filter(celu=>{return celu.modelo.toLocaleLowerCase().includes(FiltroBusqueda.toLocaleLowerCase())});
        }
        if (comparadores[filtroOrden]) {
            celularesFiltrados = [...celularesFiltrados].sort(comparadores[filtroOrden]);
          }
        setCelusFiltrados(celularesFiltrados);
    }
    
    const comparadores = {
        fechaAsc:      (a, b) => a.fechaLanzamiento - b.fechaLanzamiento,
        fechaDesc:     (a, b) => b.fechaLanzamiento - a.fechaLanzamiento,
        precioAsc:     (a, b) => a.precio - b.precio,
        precioDesc:    (a, b) => b.precio - a.precio,
        recomendado:   (a, b) => (b.esRecomendado === a.esRecomendado)
          ? 0
          : b.esRecomendado ? 1 : -1
      };

    return(
        <>
        <div className="buscadores">
        <div className="filtros">
            {marcas.map((marca) => (
                <div key={marca.id} className="filtro-opcion">
                <input
                    type="checkbox"
                    id={`marca-${marca.id}`}
                    onChange={(event) =>
                    activarFiltroPorMarca(event.target.checked, marca)
                    }
                    className="cbFiltroMarca"
                />
                <label htmlFor={`marca-${marca.id}`} className="labelFiltro">
                    {marca.nombre}
                </label>
                </div>
            ))}
            </div>

            <select onChange={e => setFiltroOrden(e.target.value)}>
                {filtrosDeOrden.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.nombre}</option>
                ))}
            </select>

            <form className="formBuscarCelular">
                <input type="text" className="inputBuscarCelular" onChange={(event)=>activarFiltroBusqueda(event.target.value)}/>
                <button type="button" className="submitBuscarCelular">
                    <img src={lupa} className="imagenSubmitBuscarCelular"/>
                </button>  
            </form>
        </div>

        <div className="cont-catalogo">
           <MostrarCatalogo catalogo={celusFiltrados}/> 
        </div>
        
        
        </>
    )
}

export default Catalogo