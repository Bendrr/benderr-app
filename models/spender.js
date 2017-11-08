module.exports = function(sequelize, DataTypes) {
  var Spender = sequelize.define("spend_statuses", {
    spender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
 });

  Spender.associate = function(models) {
    Spender.hasMany(models.bends, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };
  
  return Spender;
};