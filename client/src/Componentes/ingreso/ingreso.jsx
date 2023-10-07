import { Link } from "react-router-dom";
import "./ingreso.css";

//import Link from "react-router-dom";
function Ingreso() {
    return ( 
        <>
            <div className="cuadroPrincipal">
                <h2>Bienvenido a tremenda app con todos los pilotos de F1</h2>
                <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu Nombre" value={""} />
                <input type="text" name="apellido" id="apellido" placeholder="Ingresa tu Apellido" value={""} />
                <button>
                    <Link to="/home"> Ingresar </Link>
                </button>
            </div>
        </>
     );
}

export default Ingreso;