const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/connection");


class Users extends Model { }

//attributes segments
Users.init({
    userID: {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    username: {
        unique: true,
        type: DataTypes.STRING(),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
},
    {
        timestamps: true, //two colums by default (created at, updated at)
        paranoid: true,
        sequelize,
    }
);

module.exports = Users;