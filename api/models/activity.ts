'use strict';
import { Model, UUIDV4 } from 'sequelize';

interface ActivityAttributes {
  id: number,
  tittle: string,
  description: string,
  instructor: string,
  dictatedAt: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Activity extends Model<ActivityAttributes>
    implements ActivityAttributes {
    id!: number;
    tittle!: string;
    description!: string;
    instructor!: string;
    dictatedAt!: string;
    static associate(models: any) {
      Activity.belongsToMany(models.User, {
        through: 'UserActivity'
      })
    }
  }
  Activity.init({
    id: {
      type: DataTypes.INTEGER,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    tittle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructor: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    dictatedAt: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};