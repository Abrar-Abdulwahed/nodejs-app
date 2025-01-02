'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [
      { name: 'view-users', createdAt: new Date(), updatedAt: new Date() },
      { name: 'edit-user', createdAt: new Date(), updatedAt: new Date() },
      { name: 'delete-user', createdAt: new Date(), updatedAt: new Date() },
      { name: 'manage-department', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  },
};
