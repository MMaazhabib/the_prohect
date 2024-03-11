require("dotenv").config();
const { Sequelize } = require("sequelize");

const database = new Sequelize({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DAILECT,
});

database.authenticate().then(() => {
    console.log("Database Connected Successfully");
})
.catch((error) => {
  console.log(error.message);
});

module.exports = database;