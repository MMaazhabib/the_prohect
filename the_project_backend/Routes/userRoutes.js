const {createUser,logInUser} = require("../Controller/userController");

const routes = require("express").Router();

routes.post("/createUser", createUser);

routes.post("/logInUser", logInUser);
module.exports = routes;