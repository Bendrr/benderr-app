module.exports = function(sequelize, DataTypes) {
  var Status = sequelize.define("status_statuses", {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
 });

  Status.associate = function(models) {
    Status.hasMany(models.bends, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };
  
  return Status;
};