import React, { useEffect, useState } from "react"
import {celulares} from '../data/data.js';
import {marcas} from '../data/data.js';
import lupa from '../assets/icons/lupa.png';
import MostrarCatalogo from "../components/MostrarCatalogo.jsx";
import { Link, useParams } from "react-router-dom";

const Catalogo = () =>{
    let {marcaId}=(useParams());
    marcaId=parseInt(marcaId);
    console.log(marcaId);
    const [filtrosActivados,setFiltroActivados]=useState(marcaId === 0 ? [] : [marcas[marcaId-1].nombre]);  

    

    function activarFiltro(tildado, nombre){
        if(tildado){
            setFiltroActivados([...filtrosActivados, nombre]);
        }
        else{borrarFiltro(nombre)}
    }

    const borrarFiltro=(nombre)=>{
        const filtrosActualizados=filtrosActivados.filter(nombreFiltro=>nombreFiltro != nombre);
        setFiltroActivados(filtrosActualizados);
    }

    useEffect(() => {
        console.log("Filtros actualizados:", filtrosActivados);
    }, [filtrosActivados]);
    
    return(
        <>
        <div className="buscadores">
            <div className="filtros">
                {marcas.map((marca) => (
                    <label className="labelFiltro" key={marca.id}>
                       <input type="checkbox" onChange={(event)=>{activarFiltro(event.target.checked, marca.nombre)}}
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
           <MostrarCatalogo catalogo={celulares}/> 
        </div>
        
        
        </>
    )
}

export default Catalogo