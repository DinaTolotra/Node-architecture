const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

sequelize.define(
    "user",
    {
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        otp: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
);

module.exports = sequelize.model("user");
