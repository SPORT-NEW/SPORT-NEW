const express = require("express") ;
const router = express.Router() ;

const  { addClient , userAuthentification }=require("../Controllers/Users.controllers")

router.post("/signup",addClient)
router.post("/signin",userAuthentification)

module.exports = router;