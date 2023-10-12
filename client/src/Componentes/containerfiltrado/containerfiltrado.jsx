import {useSelector} from "react-redux"
import "../cards/container/container.css"
import CardPrincipal from "../cards/card/card"

function Filtercontainer() {

    const drivers = useSelector(state => state.filterdrivers)
    console.log(drivers)
    return ( 
    <div>
        <div className="card-container filter">
        {drivers.map((piloto) => (
          <div key={piloto.id}>
            <CardPrincipal driver={piloto} />
          </div>
        ))}
      </div>

    </div> 
    );
}

export default Filtercontainer;