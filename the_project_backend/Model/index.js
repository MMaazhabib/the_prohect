const sequelize = require("../bin/connection");

const Users = require("./defination/user");


const models = {
    Users
};

const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };