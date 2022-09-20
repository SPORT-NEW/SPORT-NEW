const adminRoutes = require ('./Routes/Admins.routes') ;
const usersRoutes = require ('./Routes/Users.routes') ;
const commentRoutes = require ('./Routes/Comments.Routes') ;
const postsRoute = require('./Routes/Posts.routes'); 

const express = require("express");
const cors = require ('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use("/",adminRoutes) ;
app.use("/user",usersRoutes) ;
app.use("/comment",commentRoutes) ;
app.use("/",postsRoute) ;



const PORT =  3000 ;





app.listen(PORT, function () {
    console.log("Port 3000 is working");
  });