const express = require('express');
const router = express.Router() ;

// Require controller modules.
const { getAllPosts, addPost, deletePost,updatePost,getPostsByCategories } = require('../Controllers/Posts.controllers');

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get('/getAll', getAllPosts);
// DELETE request for one post.
router.delete('/:id', deletePost);
// POST request for creating a new post.
router.post('/addPost', addPost);
// UPDATE request for one post.
router.put('/updatePost/:id', updatePost);
// get request for one post.
router.get('/getOnePost/:id', getPostsByCategories);











module.exports = router;