'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('spend_statuses', [
      {
      spender: "El Cheapo"
      },
      {
      spender: "Thrifty"
      },
      {
      spender: "Share"
      },
      {
      spender: "A Little Generous"
      },
      {
      spender: "Will buy all night for everyone"
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('spend_statuses');
  }
};
