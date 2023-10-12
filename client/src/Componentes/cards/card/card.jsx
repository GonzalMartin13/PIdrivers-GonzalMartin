import "./card.css"
import {Link} from "react-router-dom"

function CardPrincipal(driver) {
    const {name, img, lastname, teams, id} = driver.driver;
    return (
        <div className="card">
            <img src={img} alt={`${name} ${lastname}`} />
            <h2>{name} {lastname}</h2>
            <p>Escuderias: {teams}</p>
            <button onClick={() => console.log("Botón de ver más clickeado para usuario:", driver)}> <Link to={`/drivers/${id}`}> Info </Link> </button>
        </div>
    );
}

export default CardPrincipal;