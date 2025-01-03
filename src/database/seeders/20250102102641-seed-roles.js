'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      { name: 'super admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'manager', createdAt: new Date(), updatedAt: new Date() },
      { name: 'superadmin', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
