const { crearDriverDB, todosLosDrivers, traerDriverPorID, obtenerTeamsDesdeAPI, obtenerTeamsDesdeBD, guardarTeamsEnBD,relacionarEquiposConDriver, traerDriverPorPK } = require("../controllers/postDriverControler");
const team = require("../models/team");
const driverLimpio = require("../utils/cleanApi")

const getDriverHandler =  async(req, res) => {
   const {name} = req.query;
   try{
    const response = await todosLosDrivers(name);
    res.status(200).json(response)
   } catch (error) {
    res.status(404).json({error: error.message})
   }
}

const getTeamHandler =  async (req, res) => {
    try {
        const teams = await obtenerTeamsDesdeBD();
        if (teams.length === 0) {
            const equiposAPI = await obtenerTeamsDesdeAPI();
            await guardarTeamsEnBD(equiposAPI);
            res.status(200).json(equiposAPI);
        }else {            
            res.status(200).json(teams);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getDetailDriverHandler = async (req, res) => {
    const {id} = req.params
    const esUUID = isNaN(id) ? "base" : "api"
    try {
        const piloto = await traerDriverPorID(id, esUUID)
        res.status(200).json({piloto})
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(id, esUUID, "error")
       }
}


const postCreateDriver =  async(req, res) => {
    const { name, surname, description, img, nacionalidad, nacimiento,teams } = req.body;
    //console.log(typeof(req.body.teams));
   // console.log(req.body);
    //console.log(teams);
    //console.log("en el handler:" + name, surname, description, img, nacionalidad, nacimiento + " temas:" + req.body.teams);
    try {
        //console.log("teams:" + req.body.teams.length, typeof(req.body.teams));
        if (!req.body.teams || req.body.teams.length === 0) {
          throw new Error('AGREGA UN EQUIPO CAMPEÓN dentro del try handler');
        }else{
            //console.log("else del if  handler" + teams)
        const piloto = await crearDriverDB(name, surname, description, img, nacionalidad, nacimiento,);
      
        console.log(piloto)
        await relacionarEquiposConDriver(piloto, teams);
        console.log("antes del 200 handler");
        res.status(200).json({piloto});
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