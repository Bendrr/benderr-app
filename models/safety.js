module.exports = function(sequelize, DataTypes) {
  var Safety = sequelize.define("safety_statuses", {
    safety: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
 });

  Safety.associate = function(models) {
    Safety.hasMany(models.bends, {
      onDelete: "cascade"
    });
  };
  
  return Safety;
};