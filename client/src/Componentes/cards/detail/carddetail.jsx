import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./cardetail.css";
function CardDetail() {
    const {id} = useParams();
    const [driversID, setDriversID] = useState([])

    useEffect(() => {
        const obtenerDriversID = async (id) => {
          try {
            const {data} = await axios.get(`http://localhost:3001/drivers/${id}`);
            console.log(data);
            setDriversID(data);
            console.log(driversID)
          } catch (error) {
            console.error("Error obteniendo los conductores: ", error);
          }
        };
        obtenerDriversID(id);
        console.log(driversID)
    }, []);
    
    const {img, name, lastname, description, nationality, nacimiento, teams} =  driversID;
    return ( 
        <div className="detail" >
            <div className="img">
                <img src={img} alt={`${name} ${lastname}`} />
            </div>
            <div className="descripcionDetail">
                <h1>{name} {lastname}</h1>
                <p>{description}</p>
                <h4>Nacionalidad: {nationality}</h4>
                <h4>Fecha de Nacimiento: {nacimiento}</h4>

                <h4>Escuderias para las que corrio <br /> {teams}</h4>
                <button onClick={() => console.log("Botón de ver más clickeado para usuario:", driversID.piloto)}> <Link to={`/drivers`}> Volver a todos los pilotos </Link> </button>
            </div>

        </div>
    );
}

export default CardDetail;