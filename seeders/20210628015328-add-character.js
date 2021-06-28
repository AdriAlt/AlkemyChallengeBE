'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Characters', [{
      image: '',
      name: 'Keanu Reeves',
      age: new Date('02-09-1964'),
      weight: 85,
      history: 'Un sicario retirado quebusca venganza por la muerte del perro que le dio su esposa recientemente fallecida y el robo de su automóvil.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Characters', null, {});

  }
};
