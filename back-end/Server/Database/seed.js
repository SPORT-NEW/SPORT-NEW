const db = require("./index");

const { posts } = require('../../data.json');

(async () => {
  try {
    await db.sequelize.sync({ force: true });
    await db.Post.bulkCreate(posts);
    console.log("posts saved");
    await db.sequelize.close();
  } catch (error) {
    console.log("Error while saving data", error);
  }
})();