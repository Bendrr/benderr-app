'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('status_statuses', [
      {
      status: "Not Tonight"
      },
      {
      status: "In Jail"
      },
      {
      status: "In Hospital"
      },
      {
      status: "Ready-to-Party"
      },
      {
      status: "Already Rock’n"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
