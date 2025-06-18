import { Link, Outlet } from "react-router-dom";
import logo from '../assets/img/logo.png';

const Layout = () =>{
    
    return(
        <>
            <header>
                <Link to="/"><img src={logo}/></Link>
                <nav>
                    <div className="dropdown">
                        <button className="dropbtn">Catálogo</button>
                        <div className="dropdown-content">
                            <ul>
                                <li><Link to="/catalogo/0">Ver todos</Link></li>
                                <li><Link to="/catalogo/1">Apple</Link></li>
                                <li><Link to="/catalogo/2">Samsung</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/quienes-somos">¿Quiénes somos?</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>  
            </header>
            <Outlet />
            <footer>
                <p>Este es el footer</p>
            </footer>
        </>
    )
}

export default Layout