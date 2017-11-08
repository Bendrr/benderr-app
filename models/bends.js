module.exports = function(sequelize, DataTypes) {
  var Bend = sequelize.define("bends", {
  	createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    current_bend: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
	});

  Bend.associate = function(models) {
    Bend.belongsTo(models.users, {
    	foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  Bend.associate = function(models) {
    Bend.belongsTo(models.safey_statuses, {
    	foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  Bend.associate = function(models) {
    Bend.belongsTo(models.spend_statuses, {
    	foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  Bend.associate = function(models) {
    Bend.belongsTo(models.status_statuses, {
    	foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

    Bend.associate = function(models) {
    Bend.belongsTo(models.interested_in_statuses, {
    	foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return Bend;
};