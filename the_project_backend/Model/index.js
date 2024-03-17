const sequelize = require("../bin/connection");

const Users = require("./defination/user");
const Products = require("./defination/products");


const models = {
    Users,
    Products
    
};

const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };