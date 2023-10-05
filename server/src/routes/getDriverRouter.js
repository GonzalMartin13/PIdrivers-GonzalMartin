const {Router} = require("express");
const {getDriverHandler, getDetailDriverHandler} = require("../Handlers/driversHandlers");
const getDriverRouter = Router();

getDriverRouter.get("/", getDriverHandler)
getDriverRouter.get("/:id", getDetailDriverHandler)


module.exports = getDriverRouter;