'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', [
      { name: 'HR', createdAt: new Date(), updatedAt: new Date() },
      { name: 'IT', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Finance', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
