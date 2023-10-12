import CardPrincipal from "../card/card";
//import { useState, useEffect } from "react";
//import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./container.css";
import {
  decrement,
  increment,
  ordenarAlfabeticamente,
  traerApi,
} from "../../../Redux/actions";

function CardContainer() {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const contador = useSelector((state) => state.counter);
  
  
  const itemsPorPagina = 9;
  const startIndex = (contador - 1) * itemsPorPagina;
  const endIndex = startIndex + itemsPorPagina;
  const driversPaginaActual = drivers.slice(startIndex, endIndex);

  const handleOrdenar = () => {
    const sortedDrivers = [...drivers];
    sortedDrivers.sort((a, b) => (a.name && b.name ? a.name.localeCompare(b.name) : 0));
    dispatch(ordenarAlfabeticamente(sortedDrivers));
  };

  const handleAPI = () => {
    dispatch(traerApi())
  }


  const handleDecrement = () => {
    if (contador >= 1) {
      dispatch(decrement());
    }
  };
  const handleIncrement = () => {
    const cantPages = drivers.length / 9;
    if (contador <= cantPages) {
      dispatch(increment());
    }
  };

  return (
    <>
      <div className="pagination">
        <div className="ordenamiento">
          <button onClick={(handleOrdenar)}>Ordenar alfabeticamente</button>
          <button onClick={(handleAPI)}>PILOTOS API</button>
          <button onClick={() => alert("BD")}>PILOTOS DB</button>
          <button onClick={("")}>QUITAR FILTROS</button>
        </div>
        <div className="botpag">
          <button onClick={handleDecrement}> - </button>
          <p> {contador} </p>
          <button onClick={handleIncrement}> + </button>
        </div>
      </div>
      <h1>Todos nuestros Pilotos!</h1>
      <div className="card-container">
        {driversPaginaActual.map((piloto) => (
          <div key={piloto.id}>
            <CardPrincipal driver={piloto} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardContainer;
