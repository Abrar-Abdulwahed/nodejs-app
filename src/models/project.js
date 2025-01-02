'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.Department, {
        foreignKey: 'departmentId',
        as: 'department',
      });
      Project.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Departments',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};