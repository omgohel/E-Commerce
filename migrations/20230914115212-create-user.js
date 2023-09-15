'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      phone_no: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING(100),
        allowNull: true,
      }, isVerified: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
      },
      isEmailVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      token: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};