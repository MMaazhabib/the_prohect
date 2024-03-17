
const userService = require("../Service/userService");
const joi = require("joi");

const createUserSchema = joi.object().keys({

    username: joi.string().alphanum().min(3).max(30).required(),
    password: joi.string().required(),
    role: joi.string().required(),
});
const loginUserSchema = joi.object().keys({

    username: joi.string().alphanum().min(3).max(30).required(),
    password: joi.string().required(),
})

module.exports = {
    
    createUser: async (req, res) => {
        try {
            const validate = await createUserSchema.validateAsync(req.body);
            const createdUser = await userService.createUser(validate);

            if (createdUser.error) {

                return res.send({
                    error: createdUser.error,
                    message: "Error in userController"
                });
            }
            return res.send({
                response: createdUser.response,
                message: "Return response Message"

            })
        } catch (error) {
            return res.send({
                error: error.message,
            });
        }
    },
    logInUser: async (req, res) => {
        try {
            console.log("before valiadte")
            console.log("req.body is",req.body)
            const validate = await loginUserSchema.validateAsync(req.body);

            console.log("b/w valiadte")
            const logInUser = await userService.loginUser(validate);
            console.log(logInUser)
            console.log("after login user variable valiadte")

            if (logInUser.error) {

                return res.send({
                    error: logInUser.error,
                    message: "Wrong username or passward controller"
                });
            }
            
            return res.send({
                
                response: logInUser.response,
                message: "login controller"

            })
        } catch (error) {
            return res.send({
                error: error.message,
                message:"usercontroller catch"
            });
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const product = await userService.getAllProducts();

            if (product.error) {
                return res.send({
                    error: product.error,
                });
            }
            return res.send({
                response: product.response,
            })
        } catch (error) {
            return {
                error: error.message,
            };
        }
    },

}