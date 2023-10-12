import { useState, } from "react";
import { useDispatch } from "react-redux";
import { los15Pilotos } from "../../Redux/actions"; 
import {useNavigate} from "react-router-dom"
import "./search.css"

function Searchbar() {
    const [name, setName] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleInputChange(event) {
        const {value} = event.target;
        setName(value)
        dispatch(los15Pilotos(value))

     }
      function cambioPag(){
        navigate('/filterdrivers')
     }
    const handleEnter = (event) =>{
        if (event.key === "Enter"){
        cambioPag()
        }
    } 

    return (  
    <div className="busqueda">
         
         <input 
         type='search'
         onChange={handleInputChange}        
         value={name} 
         onKeyDown={handleEnter}
         placeholder="Busca por el nombre"
         />
         <button onClick={cambioPag}>Buscar</button>
    </div>
    );
}

export default Searchbar;