//Controller related to posts ressource.
const  db  = require("../Database/index");

module.exports = {
  //method to fetch all posts from the blog database.
  getAllPosts: async (req, res) => {
    try {
      const posts = await db.Post.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(posts);
      return;
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to load resource");
      return;
    
    }
  },
  //getone send empty array
  getPostsByCategories: async (req, res) => {
    try {
      const posts = await db.Post.findAll({
        where:{id: req.params.id},
        order: [["createdAt", "DESC"]],
      });
      console.log(req.params),
      res.status(200).json(posts);
      return;
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to load resource");
      return;
    
    }
  },

  //method to get delete post by id.
  deletePost: async (req, res) => {
    let id = req.params.id
    try {
      const postDelted = await db.Post.destroy({ where: { id: id } })
      res.status(200).json(postDelted);
    } catch (error) {
      res.status(500).send("Failed to load resource");
    }
  },
  updatePost: async (req, res) => {
    let id = req.params.id
    let update = req.body
    try {
      const postUpdated = await db.Post.update(update,{ where: { id: id } })
      res.status(200).json(postUpdated);
    } catch (error) {
      res.status(500).send("Failed to load resource");
    }
  },
  //method to add a post to the database via the respective model function.
  addPost: async (req, res) => {
    try {
      const post = await db.Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
  //method to add a post to the database via the respective model function.
  

