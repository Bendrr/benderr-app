'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('safety_statuses', [
      {
      safety: "Very Concerned"
      },
      {
      safety: "A Little Concerned"
      },
      {
      safety: "Who Cares"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('safety_statuses');
  }
};
