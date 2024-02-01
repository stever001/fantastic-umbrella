'use strict';

const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_name: 'Shorts',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_name: 'Music',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_name: 'Hats',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_name: 'Shoes',
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Use queryInterface to bulk insert the categoryData
    await queryInterface.bulkInsert('Categories', categoryData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Optionally, you can use queryInterface to delete all entries in Categories table
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

