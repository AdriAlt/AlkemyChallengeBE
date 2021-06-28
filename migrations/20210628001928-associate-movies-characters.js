'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   await queryInterface.createTable(
    'MoviesCharacters',
    {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      MovieId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      CharacterId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
    }
  );
     
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('MoviesCharacters');
     
  }
};
