const { crearDriverDB, todosLosDrivers, traerDriverPorID, obtenerTeamsDesdeAPI, obtenerTeamsDesdeBD, guardarTeamsEnBD,relacionarEquiposConDriver, traerDriverPorPK } = require("../controllers/postDriverControler");
const team = require("../models/team");
const driverLimpio = require("../utils/cleanApi")

const getDriverHandler =  async(req, res) => {
   const {name} = req.query;
   
   console.log("estoy en el fander")
   try{
       
       console.log("estoy en el fander try")
    const response = await todosLosDrivers(name);
    res.status(200).json(response)
   } catch (error) {
    res.status(404).json({error: error.message})
   }
}

const getTeamHandler =  async (req, res) => {
    try {
        const teams = await obtenerTeamsDesdeBD();
        const equiposAPI = await obtenerTeamsDesdeAPI();
        const allTeams = [...teams, ...equiposAPI]
        res.status(200).json(allTeams);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getDetailDriverHandler = async (req, res) => {
    const {id} = req.params
    const esUUID = isNaN(id) ? "base" : "api"
    try {
        const piloto = await traerDriverPorID(id, esUUID)
        res.status(200).json(piloto)
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(id, esUUID, "error")
       }
}


const postCreateDriver =  async(req, res) => {
    const { name, surname, description, img, nacionalidad, nacimiento,teams } = req.body;
    try {
        if (!req.body.teams || req.body.teams.length === 0) {
          throw new Error('AGREGA UN EQUIPO CAMPEÓN dentro del try handler');
        }else{

        const piloto = await crearDriverDB(name, surname, description, img, nacionalidad, nacimiento,);
      
        console.log(piloto)
        const pilotoCompleto = relacionarEquiposConDriver(piloto, teams);
        console.log("antes del 200 handler");
        console.log(pilotoCompleto);
        res.status(200).json({pilotoCompleto});
        console.log("después del 200 handler");
        }
    } catch (error) {
        console.log("catch del handler" + req.body.teams);
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getDriverHandler,
    getTeamHandler,
    getDetailDriverHandler,
    postCreateDriver
}