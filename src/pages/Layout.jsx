import { Link, Outlet } from "react-router-dom";
import logo from '../assets/img/logo.png';
import login from '../assets/icons/login.png';
import {marcas} from '../data/data.js';
import { useContext } from "react";
import '../estilos/Layout.css';
import { UserContext } from "../contextos/UserContext";


const Layout = () =>{
  const { usuario } = useContext(UserContext);
    return(
        <>
            <header>
                <nav>
                    <Link to="/"><img src={logo}/></Link>
                    <div className="dropdown">
                        <button className="dropbtn">Catálogo</button>
                        <div className="dropdown-content">
                            <ul>
                                <li><Link to="/catalogo">Ver todos</Link></li>
                                {
                                    marcas.map((marca) => (
                                            <li key={marca.id}>
                                                <Link to={`/catalogo?marca=${marca.nombre}`}>{marca.nombre}</Link>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <Link to="/quienes-somos">¿Quiénes somos?</Link>
                    <Link to="/contacto">Contacto</Link>
                    {usuario && usuario.esAdmin ? (
                        <Link to="/admin">Admin</Link>
                    ) : null}
                </nav>
                <Link to="/perfil">
                    <img style={{ width: '45px' }} src={login} alt="Login" />
                </Link>
            </header>
            <Outlet />
            <footer>
                <p>&copy; {new Date().getFullYear()} VentaCelulares. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}

export default Layout