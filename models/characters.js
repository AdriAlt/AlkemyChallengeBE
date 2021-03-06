'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Characters.belongsToMany(models.Movies, { through: 'MoviesCharacters' });

    }
  };
  Characters.init({
    image: DataTypes.BLOB,
    name: DataTypes.STRING,
    age: DataTypes.DATE,
    weight: DataTypes.FLOAT,
    history: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Characters',
  });
  return Characters;
};