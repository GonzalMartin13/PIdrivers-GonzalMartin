const axios = require("axios");
require("dotenv").config();
const server = require("./src/server");
const { conn } = require("./src/db.js");
const { PORT } = process.env;
const {Driver} = require ("./src/db")
const driverLimpio = require("./src/utils/cleanApi")

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`,);
    });
  })
  .catch((error) => console.error(error));

console.log("Hasta aca llegue");
