import React, { useEffect, useState } from "react"
import {celulares} from '../data/data.js';
import {marcas} from '../data/data.js';
import lupa from '../assets/icons/lupa.png';
import MostrarCatalogo from "../components/MostrarCatalogo.jsx";

const Catalogo = () =>{
    
    return(
        <>
        <div className="buscadores">
            <div className="filtros">
                <button className="filtroActivo" type="button" onClick="">Apple</button>
                <button className="filtroActivo" type="button" onClick="">Samsung</button>
                <button className="filtroActivo" type="button" onClick="">Xiaomi</button>
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