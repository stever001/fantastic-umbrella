'use strict';

const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_id: 1,
    tag_id: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_id: 1,
    tag_id: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_id: 2,
    tag_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_id: 3,
    tag_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Add createdAt and updatedAt for each entry
  // Continue with the rest of your productTagData...
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductTags', productTagData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductTags', null, {});
  }
};

