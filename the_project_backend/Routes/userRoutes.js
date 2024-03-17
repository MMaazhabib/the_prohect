const {createUser,logInUser,getAllProducts} = require("../Controller/userController");

const routes = require("express").Router();

routes.post("/createUser", createUser);

routes.post("/logInUser", logInUser);

routes.get("/getAllProduct", getAllProducts);
module.exports = routes;