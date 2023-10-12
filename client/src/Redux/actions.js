// actions.js
import driverLimpio from "../../../server/src/utils/cleanApi";
import { ALL_DRIVERS, GET_BY_NAME, USER, ORDER_AZ,API , } from "./action-types";
import axios from "axios";

export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });

  export const setDrivers = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get("http://localhost:3001/drivers");
        console.log(data);
        dispatch({
          type: ALL_DRIVERS,
          payload: data,
        });
      } catch (error) {
        console.error("Error en la acción setDrivers:", error);
      }
    };
  };
  export const setUsuario = (user) => {
    return (dispatch) => {
        console.log(user);
        dispatch({
          type: USER,
          payload: user,
        });
      } 
    };

    export const los15Pilotos = (query) => {
      return async (dispatch) => {
        try {
          const { data } = await axios.get(`http://localhost:3001/drivers?name=${query}`);
          console.log(data);
          dispatch({
            type: GET_BY_NAME,
            payload: data,
          });
        } catch (error) {
          console.error("Error en la acción api:", error);
        }
      };
    };

    export const ordenarAlfabeticamente = (drivers) => ({
      type: ORDER_AZ,
      payload: drivers,
    });
  
    export const traerApi = () => {
      return async (dispatch) => {
        try {
          const { data } = await axios.get('http://localhost:5000/drivers');
          const dataLimpia = driverLimpio(data);
          dispatch({
            type: API,
            payload: dataLimpia,
          });
        } catch (error) {
          console.error("Error en la acción setDrivers:", error);
        }
      };
    };