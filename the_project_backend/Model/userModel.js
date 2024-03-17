const { models } = require("./index");
const bcrypt = require("bcryptjs");

module.exports = {
  createUser: async (body) => {
    try {
      const createdUser = await models.Users.create({ ...body });
      return {
        response: createdUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  logInUser: async (body) => {
    try {
      const { username, password } = body;

      const user = await models.Users.findOne({ where: { username } });

      const validPassword = await bcrypt.compare(password, user.password);
      console.log(user.password, password);
      if (!validPassword) {
        return {
          message: "wrong passward model",
        };
      }
      return {
        response: user,
        message: "login model",
      };
    } catch (error) {
      return {
        error: error.message,
        message: "model",
      };
    }
  },
  getAllProducts: async () => {
    try {
        const product = await models.Products.findAll();
        return {
            response: product,
        }
    } catch (error) {
        return {
            error: error.message,
        };
    }

}
};
