//Controller related to Admin ressource.
const  db  = require("../Database/index");



module.exports={
  //method to fetch all admin from the blog database.
  getAllAdmin: async(req,res) => {
    console.log(db)
        try {
            const admins =await db.Admin.findAll({
                order: [["createdAt", "DESC"]],
            });
            res.status(200).json(admins);return;
        }catch (error){console.log (error)}res.status(502).send('you have error');return;
    },
   //method to add a post to the database via the respective model function.
    addAdmin:async(req,res)=>{
        let newAdmin = {
           adminName: req.body.adminName,
           email: req.body.email,
           password: req.body.password,
        }
        console.log(newAdmin);
        try {
            const admin =await db.Admin.create(newAdmin);
            res.status(203).send(admin) ;return;
        }catch (error){console.log (error)}res.status(555).send('you have error');return;
    },
     //method to get one admin by picture's link.
    deleteAdmin:async(req,res)=>{
        let id =req.params.idDeleted
        console.log(id);
        try {
            const adminDeleted=await db.Admin.destroy({where :{id :id}})
            res.status(207).json(adminDeleted) ;return;
        }catch (error){console.log(error)}res.status(564).send('you have error');return;
    },
}