'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Movies', [{
      image: '',
      title: 'John Wick',
      release: new Date('2014'),
      qualication: 5,
      generId: 1,
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Movies', null, {});

  }
};
