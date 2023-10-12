import Searchbar from "../searchbar/search"
import { NavLink} from "react-router-dom"
import "./nav.css"
import {useSelector} from "react-redux"

function Nav() {
    const user = useSelector(state => state.usuario)
    console.log(user)
    return (  
    <nav className="nav">
        <NavLink to="/drivers"> Todos los pilotos</NavLink>
        <NavLink to="/create"> Crear nuevo Pioloto</NavLink>
        <p>  Bienvenido {user.nombre} {user.apellido} </p>
        <Searchbar className="search"/>
    </nav>
    );
}

export default Nav;