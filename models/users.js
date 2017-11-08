module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    tag_line: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sms_phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
        }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
        len: [6]
        }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  // User.associate = function(models) {
  //   User.hasOne(models.accounts, {
  //     onDelete: "cascade"
  //   });
  // };

  // User.associate = function(models) {
  //   User.hasMany(models.pics, {
  //     onDelete: "cascade"
  //   });
  // };

  User.associate = function(models) {
    User.hasMany(models.bends, {
      onDelete: "cascade"
    });
  };

  return User;
};