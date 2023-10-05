const { Router } = require("express");
const getDriverRouter = require("./getDriverRouter");
const getTeamRouter = require("./getTeamRouter");
const postDriverRouter = require("./postDriverRouter");

const router = Router();

router.use("/drivers", getDriverRouter)
router.use("/teams", getTeamRouter)
router.use("/drivers", postDriverRouter)

module.exports = router;
