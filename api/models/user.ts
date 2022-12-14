'use strict';
import { Model, UUIDV4 } from 'sequelize';

interface UserAttributes {
  id: string,
  name: string,
  lastName: string,
  email: string,
  password: string,
  role: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes>
    implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    name!: string;
    lastName!: string;
    email!: string;
    password!: string;
    role!: string;
    static associate(models: any) {
      User.belongsToMany(models.Activity, {
        through: 'UserActivity'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  },
    {
      sequelize,
      modelName: 'User',
    });
  return User;
};