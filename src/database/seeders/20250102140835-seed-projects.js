'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'HR Management System',
        description: 'Developing a system to manage employee records and payroll.',
        departmentId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'IT Infrastructure Upgrade',
        description: 'Upgrading servers and network infrastructure.',
        departmentId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marketing Campaign 2025',
        description: 'Planning and executing the marketing strategy for 2025.',
        departmentId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
