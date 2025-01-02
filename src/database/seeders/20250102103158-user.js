'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Users', [
      {
        name: 'Super Admin',
        email: 'superadmin@gmail.com',
        password: '123',
        roleId: 1,
        departmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: '123',
        roleId: 2,
        departmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Manager User',
        email: 'manager@example.com',
        password: '123',
        roleId: 3,
        departmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
