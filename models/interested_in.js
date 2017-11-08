module.exports = function(sequelize, DataTypes) {
  var Interested = sequelize.define("interested_in_statuses", {
    interest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
 });

  Interested.associate = function(models) {
    Interested.hasMany(models.bends, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };
  
  return Interested;
};