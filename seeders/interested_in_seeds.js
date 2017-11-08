'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('interested_in_statuses', [
      {
      interest: "Quite Evening"
      },
      {
      interest: "A Little Noisey"
      },
      {
      interest: "Get A Buzz"
      },
      {
      interest: "Getting Drunk"
      },
      {
      interest: "Passed-out Naked"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('interested_in_statuses');
  }
};
