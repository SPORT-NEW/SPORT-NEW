// Define and export the sequelize model that represents the table admins.

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("admins", {
      adminName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
  };