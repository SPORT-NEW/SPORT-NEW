// Define and export the sequelize model that represents the table comments.

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comments", {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Comment;
  };