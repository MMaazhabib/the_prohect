
const userModel = require("../Model/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");

module.exports = {
    createUser: async (body) => {
        try {
            
            const user = {
                userID: uuid(),
                username: body.username,
                password: await hash(body.password, 10),
                role: body.role
            };
            const createdUser = await userModel.createUser(user);
            if (createdUser.error) {
                return {
                    error: createdUser.error,
                };
            }
            delete createdUser.response.dataValues.password;
            return {
                response: createdUser.response
            };

        } catch (error) {
            return {
                error: error.message
            };
        }
    },
    loginUser: async (body) => {
        try {
            const logInuser = await userModel.logInUser(body);
            
            
            if (logInuser.error) {
                return {
                    error: logInuser.error,
                    message:"username  is invalid "
                };
            }
            
            delete logInuser.response.dataValues.password;
            return {
                response: logInuser.response.username,
                message:"user service after delete pass"
            }           
            
        } catch (error) {
            return {
                error: error.message,
                
                message:"user service catch"
            };
        }
    },


}