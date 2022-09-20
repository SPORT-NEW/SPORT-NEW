//Controller related to users ressource for login And signUp.
const db = require("../Database/index");
const { hashed } = require("../Token&Auth/Auth.js")
const { NewToken } = require("../Token&Auth/Token.js")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//adding client 
module.exports = {
  //adding a user 
  addClient: async (req, res) => {
    let NewUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashed(req.body.password)
    }
    try {
      console.log("req--->", NewUser)
      const userinfo = await db.User.create(NewUser);
      res.send(userinfo)
      console.log(userinfo)
    }
    catch (err) {
      res.send(err)
    }
  },

  //verifying user identity
  userAuthentification: async (req, res) => {
    try {
      const user = {
        username: req.body.username,
        password: req.body.password
      }
      const userAuth = await db.User.findOne({
        where:
        {
          username: req.body.username
        }
      }
      );
      const Match = bcrypt.compareSync(user.password, userAuth.dataValues.password);
      if (Match) {
        const token = jwt.sign( userAuth.dataValues, 'secret');
        res.cookie("auth", token);
        res.send({ message: 'welcome Back'})
      } else {   
        res.send({ message: 'check the entries' });
      }
    }
    catch (err) {
      res.status(401).send(err)
    }
  },
  // log out function 
   logout : (req,res)=>{
    try {
     res.clearCookie("auth");
     res.status(200).json("logout success");
     
    } catch (error) {
     console.log(error);
     res.status(400).json("error");
    }
   }
  
};
