const Jwt =require("jsonwebtoken");

module.exports = {
    NewToken: function (userObject) {
        const token = Jwt.sign(userObject,'secret', { 
            expiresIn:'5h',
            sameSite:"lax"

        
        });
        return token
    }
}