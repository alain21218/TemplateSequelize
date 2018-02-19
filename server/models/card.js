'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

  Card.associate = (models) => {
    //Card.hasMany(models.CardItem, {
    //  foreignKey: 'cardId',
    //  as: 'cardItems',
    //});
  };

  return Card;
};