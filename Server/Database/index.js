const { Sequelize, DataTypes } = require("sequelize");
const config = require('../../configuration/config.json');


const sequelize = new Sequelize(config.database, config.user, config.password,
    {
      host: "localhost",
      dialect: "mysql",
      logging: false
    }
  );

  const db = {};
  db.sequelize = sequelize;


  db.User = require("./models/users.model")(sequelize, DataTypes);
  db.Admin = require("./models/admins.model")(sequelize, DataTypes);
  db.Post = require("./models/posts.model")(sequelize, DataTypes);
  db.Comment = require("./models/comments.model")(sequelize, DataTypes);

  
db.User.hasMany(db.Comment, {
    foreignKey: "commenterId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
  db.Comment.belongsTo(db.User, {
    as: "commenter",
    foreignKey: "commenterId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
  db.Post.hasMany(db.Comment, {
    foreignKey: "postId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
  db.Comment.belongsTo(db.Post, {
    foreignKey: "postId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });


db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = db;