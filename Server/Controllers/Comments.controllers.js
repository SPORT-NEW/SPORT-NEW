//Controller related to Admin ressource.
const db = require("../Database/index");



module.exports = {
    //method to fetch all comment from the blog database.
    getAllComment: async (req, res) => {
        console.log(req.params.id);
        try {
            const comments = await db.Comment.findAll({
                where: { postId: req.params.id }
            })
            res.status(222).json(comments); return;
        } catch (error) { console.log(error) } res.status(530).send('you have error'); return;
    },
    //method to add a comment to the database via the respective model function.
    addComment: async (req, res) => {
        console.log(req.body)
        try {
            const addComment = await db.Comment.create(req.body)
            res.status(230).send(addComment); return;
        } catch (error) { console.log(error) } res.status(543).send('you have error'); return;
    },
    //method to get one admin by picture's link.
    deleteComment: async (req, res) => {
        let id = req.params.id
        console.log(req.params);
        try {
            const deleteComment = await db.Comment.destroy({ where: { id: id } })
            res.status(232).send(deleteComment);
        } catch (error) { console.log(error) } res.status(543).send('you have error ')
    },

    updateComment: async (req, res) => {
        let update = req.body
        let id = req.params.id
        try {
            const updateComment = await db.Comment.update(update, { where: { id: id } });
            res.status(201)
            res.send(updateComment)
        } catch (error) { console.log(error) }
        res.status(540).send('you have error')
    },
}