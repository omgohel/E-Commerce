"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      phone_no: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pincode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      isVerified: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
      },
      isEmailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      token: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
