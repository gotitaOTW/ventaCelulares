{/*
Proximo codeo:
- preguntarle a gpt el tema no tener home como page sino como componente mostrado por layout: 
mejor forma de hacerlo, el objetivo de eso, etc.
- arreglar lista desplegable


*/}

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout';
import Celular from './pages/Celular';
import Contacto from './pages/Contacto';
import Catalogo from './pages/Catalogo';
import QuienesSomos from './pages/QuienesSomos';
import Home from './pages/Home';
import { UserProvider } from './contextos/UserContext';
import CrearCuenta from './pages/CrearCuenta';
import IniciarSesion from './pages/IniciarSesion';
import { useContext } from "react";
import { UserContext } from "./contextos/UserContext";
import Admin from './pages/Admin';
import Perfil from './pages/Perfil';  
import Comprar from './pages/Comprar';
import Confirmacion from './pages/Confirmacion';

function App() {
  const { usuario } = useContext(UserContext);

  return (
    <>
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Home />}></Route>
          <Route path='/catalogo' element={<Catalogo/>}></Route>
          <Route path='/catalogo/:idCelu' element={<Celular/>}></Route>
          <Route path='/catalogo/*' element={<h1>Marca desconocida!</h1>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
          <Route path='/quienes-somos' element={<QuienesSomos/>}></Route>
          <Route path='/CrearCuenta' element={<CrearCuenta/>}></Route>
          <Route path='/IniciarSesion' element={<IniciarSesion/>}></Route>
          <Route path='/perfil' element={<Perfil/>}></Route>
          <Route path='/confirmacion/:idCelu' element={<Confirmacion/>}></Route>
          <Route path='/comprar/:idCelu' element={<Comprar/>}></Route>
          <Route path='/admin' element={<Admin />} />


        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
    
    </>
  )
}

export default App
