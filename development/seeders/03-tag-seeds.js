'use strict';

const tagData = [
  {
    tag_name: 'rock music',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'pop music',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'blue',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'red',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'green',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'white',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'gold',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'pop culture',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Add createdAt and updatedAt for each tag entry
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', tagData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};

