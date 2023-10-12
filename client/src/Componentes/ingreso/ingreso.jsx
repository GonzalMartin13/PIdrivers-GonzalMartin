import { Link } from "react-router-dom";
import { useState } from "react";
import "./ingreso.css";
import { useDispatch } from "react-redux";
import { setUsuario } from "../../Redux/actions";

function Ingreso() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
      });
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        dispatch (setUsuario(user));
        console.log(user)
      };

    return ( 
        <>
            <div className="cuadroPrincipal">
                <h2>Bienvenido a tremenda app con todos los pilotos de F1</h2>
                <input required type="text" name="nombre" id="nombre" placeholder="Ingresa tu Nombre" value={user.nombre} onChange={handleInputChange}   />
                <input required type="text" name="apellido" id="apellido" placeholder="Ingresa tu Apellido" value={user.apellido + ""} onChange={handleInputChange} />
                <button>
                    <Link to="/drivers"> Ingresar </Link>
                </button>
            </div>
        </>
     );
}

export default Ingreso;