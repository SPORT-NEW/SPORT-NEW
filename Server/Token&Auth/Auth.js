const bcrypt=require("bcrypt")
module.exports = {
    hashed: function (password) {
        return bcrypt.hashSync(password, 8)
    },
}