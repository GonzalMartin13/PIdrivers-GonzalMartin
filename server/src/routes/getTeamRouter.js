const {Router} = require("express");
const {getTeamHandler} = require("../Handlers/driversHandlers");
const  getTeamRouter = Router();

getTeamRouter.get("/", getTeamHandler)

module.exports = getTeamRouter;