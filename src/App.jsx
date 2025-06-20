{/*
Proximo codeo:
- preguntarle a gpt el tema no tener home como page sino como componente mostrado por layout: 
mejor forma de hacerlo, el objetivo de eso, etc.
- arreglar lista desplegable


*/}

import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout';
import Celular from './pages/Celular';
import Contacto from './pages/Contacto';
import Catalogo from './pages/Catalogo';
import QuienesSomos from './pages/QuienesSomos';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}> {/*layout tiene que mostrar el componente home*/}

        {/* en Home tiene que aparecer un botón con ver catálogo y que te lleve directo*/}
        <Route path='/catalogo/:marcaId' element={<Catalogo/>}></Route> {/*en filtros hay checkboxes de marca y precio (ver idea catalogo). el parametro sirve para seleccionar uno*/}
        <Route path='/catalogo/:id' element={<Celular/>}></Route> {/*muestra carousel de foto en grande y sus datos con botón de comprar*/}
        <Route path='/catalogo/*' element={<h1>Marca desconocida!</h1>}></Route> {/*muestra carousel de foto en grande y sus datos con botón de comprar*/}
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/quienes-somos' element={<QuienesSomos/>}></Route>


        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
