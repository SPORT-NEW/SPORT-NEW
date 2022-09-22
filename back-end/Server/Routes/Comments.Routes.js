
const express = require("express") ;
const router = express.Router() ;



// Require controller modules.
 const{getAllComment,addComment,deleteComment,updateComment}=require ('../Controllers/Comments.controllers')


/// comment routes /////////////////////////////////////


/// POSTS ROUTES /// 

//GET request to fetch all posts.
router.get('/allComments',getAllComment) ;
// POST request for creating a new post.
router.post ('/add',addComment) ;
//DELETE request to delete 
router.delete('/delete/:id',deleteComment) ;
//UPDATE request to update  
router.put('/update/:id',updateComment) ; 











module.exports = router;