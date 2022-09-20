// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
      username: {
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
      status: {
        type: DataTypes.STRING, 
      },
    });
  
    return User;
  };
  