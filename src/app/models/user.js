'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nome: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeSave: async user => {
        user.senha = await bcrypt.hash(user.senha, 6)
      }
    }
  }

  );

  return User;
};