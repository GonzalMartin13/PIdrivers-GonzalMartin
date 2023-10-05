const {Router} = require("express");
const {postCreateDriver} = require("../Handlers/driversHandlers");
const postDriverRouter = Router();

postDriverRouter.post("/", postCreateDriver)  
module.exports = postDriverRouter;