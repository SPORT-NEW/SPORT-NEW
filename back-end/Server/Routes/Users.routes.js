const express = require("express") ;
const router = express.Router() ;

const  { addClient , userAuthentification, logout }=require("../Controllers/Users.controllers")

router.post("/signup",addClient)
router.post("/signin",userAuthentification)
router.get("/logout",logout)



module.exports = router;