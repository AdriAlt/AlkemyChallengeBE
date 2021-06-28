'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // associations can be defined here
      Movies.belongsTo(models.Gener, {
      foreignKey: 'generId',
      onDelete: 'CASCADE'
    })
      Movies.belongsToMany(models.Characters, { through: 'MoviesCharacters' })
    }
  };
  Movies.init({
    image: DataTypes.BLOB,
    title: DataTypes.STRING,
    release: DataTypes.DATE,
    qualication: DataTypes.INTEGER,
    generId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};