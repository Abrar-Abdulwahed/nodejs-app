'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RolePermissions', [
      { roleId: 1, permissionId: 1, createdAt: new Date(), updatedAt: new Date() }, // canViewUsers

      { roleId: 2, permissionId: 1, createdAt: new Date(), updatedAt: new Date() }, // canViewUsers
      { roleId: 2, permissionId: 2, createdAt: new Date(), updatedAt: new Date() }, // canEditUsers
      { roleId: 2, permissionId: 3, createdAt: new Date(), updatedAt: new Date() }, // canDeleteUsers
      { roleId: 2, permissionId: 4, createdAt: new Date(), updatedAt: new Date() }, // canManageDepartments

      { roleId: 3, permissionId: 1, createdAt: new Date(), updatedAt: new Date() }, // canViewUsers
      { roleId: 3, permissionId: 2, createdAt: new Date(), updatedAt: new Date() }, // canEditUsers
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('RolePermissions', null, {});
  },
};
