const {Driver, Team} = require ("../db")
const axios = require ("axios");
const driverLimpio = require("../utils/cleanApi")

const crearDriverDB = async (name, surname, description, img, nacionalidad, nacimiento) => {
  
    try {
      
        const nuevoPiloto = await Driver.create({
          name,
          surname,
          description,
          img,
          nacionalidad,
          nacimiento,
        });
        
    
        return nuevoPiloto;
      } catch (error) {

        throw error ;
      }
};


const relacionarEquiposConDriver = async (driver, teams) => {

    try {
      
      const equiposPromises = teams.split().map(async (teamName) => {
        const [equipo, created] = await Team.findOrCreate({ where: { name: teamName } });
        // Relaciona el conductor con el equipo
        await driver.addTeam(equipo);
        
      });
  
      await Promise.all(equiposPromises);
    } catch (error) {
      throw error;
    }
  };

const todosLosDrivers = async (name) =>{
    const peticion = await axios.get('http://localhost:5000/drivers')
    const driversAPI = peticion.data

    const driversDB = await Driver.findAll();
    if (!driversDB){ throw new Error ("la base de datos de drivers esta vacia")}

     let allDrivers = [];
    if (name) {
        const apiFiltrada = driversAPI.filter(
            (driver) => driver.name.forename.toLowerCase() === name.toLowerCase()
        );
        const DBfiltrada = driversDB.filter(
            (driver) => driver.name.toLowerCase() === name.toLowerCase()
        );
        allDrivers = [...DBfiltrada, ...apiFiltrada].slice(0, 15);
    } else{
        allDrivers = [...driversDB, ...driversAPI];
    } 
    return allDrivers.map(pilot => driverLimpio(pilot))
}

const traerDriverPorID = async (id, esUUID) => {
  if (esUUID === "api") {
    // Si es un UUID, realiza la solicitud a la API
    const {data} = await axios.get(`http://localhost:5000/drivers/${id}`);
    return driverLimpio(data);
  } else if (!isNaN(id)) {
    // Si es un número, busca en la base de datos
    const encontrado = await Driver.findByPk(id);
    return encontrado;
  } else {
    // Si no es ni UUID ni número, lanza un error
    throw new Error('Ingresa un UUID valido master');
  }
}

const obtenerTeamsDesdeBD = async () => {
    try {
      const equipos = await Team.findAll();
      return equipos.map((equipo) => equipo.name);
    } catch (error) {
      throw error;
    }
  };

  const obtenerTeamsDesdeAPI = async () => {
    try {
      const response = await axios.get('http://localhost:5000/drivers');
      const apiTeams = response.data;
  
      const teamsSet = new Set();
  
      apiTeams.forEach((driver) => {
        if (driver.teams) {
          const teams = driver.teams.split(',').map((t) => t.trim());
          teams.forEach((team) => {
            teamsSet.add(team);
          });
        }
      });
  
      const uniqueTeams = Array.from(teamsSet);
      return uniqueTeams;
    } catch (error) {
      throw error;
    }
  };

  const guardarTeamsEnBD = async (teams) => {
    try {
      const teamPromises = teams.map((teamName) =>
        Team.findOrCreate({ where: { name: teamName } })
      );
  
      await Promise.all(teamPromises);
    } catch (error) {
      throw error;
    }
  };
  

module.exports = {crearDriverDB, traerDriverPorID, guardarTeamsEnBD, obtenerTeamsDesdeAPI, obtenerTeamsDesdeBD, todosLosDrivers, relacionarEquiposConDriver}; 

