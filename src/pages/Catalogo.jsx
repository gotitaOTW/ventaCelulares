import React, { useEffect, useState } from "react"
import {celulares} from '../data/data.js';
import {marcas} from '../data/data.js';
import lupa from '../assets/icons/lupa.png';
import MostrarCatalogo from "../components/MostrarCatalogo.jsx";
import { Link, useParams } from "react-router-dom";

const Catalogo = () =>{
    let {marcaId}=(useParams());
    marcaId=parseInt(marcaId);
    const [filtrosActivados,setFiltroActivados]=useState(marcaId === 0 ? [] : [marcas[marcaId-1]]);
    const [celusFiltrados,setCelusFiltrados]=useState(celulares);
    //const [busqueda,setBusqueda]=useState("");
    

    function activarFiltro(tildado, marca){
        if(tildado){
            setFiltroActivados([...filtrosActivados, marca]);
            
        }
        else{borrarFiltro(marca)}
    }

    const borrarFiltro=(marca)=>{
        const filtrosActualizados=filtrosActivados.filter(filtro=>filtro != marca);
        setFiltroActivados(filtrosActualizados);
    }

    useEffect(() => {
        filtrarArray();
    }, [filtrosActivados]); 

    const filtrarArray=()=>{
        if(filtrosActivados.length>0){
           const idsMarca=filtrosActivados.map(marca=>marca.id);
           const celularesFiltrados=celulares.filter(celu=>idsMarca.includes(celu.marcaId));
           setCelusFiltrados(celularesFiltrados); 
        }
        else{
           setCelusFiltrados(celulares); 
        }
        
    }
    
    return(
        <>
        <div className="buscadores">
            <div className="filtros">
                {marcas.map((marca) => (
                    <label className="labelFiltro" key={marca.id}>
                       <input type="checkbox" onChange={(event)=>{activarFiltro(event.target.checked, marca)}}
                        className="cbFiltroMarca" hidden/>
                       {marca.nombre} 
                    </label>
                ))}
            </div> 

            <form className="formBuscarCelular">
                <input type="text" className="inputBuscarCelular"/>
                <button type="submit" className="submitBuscarCelular">
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