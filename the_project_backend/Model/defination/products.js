const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/connection");


class Products extends Model { }

//attributes segments
Products.init({
    productsId: {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    productname: {
        unique: true,
        type: DataTypes.STRING(),
        allowNull: false,
    },
    productprice: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    productdescripton: {
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

module.exports = Products;