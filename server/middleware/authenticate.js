const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        console.log("token", token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findOne({
            _id: verifyToken._id,
            "tokens.token": token,
        });

        if (!user) {
            throw new Error("User not Found");
        }

        req.token = token;
        req.user = user;
        req.userID = user._id;

        next();
    } catch (error) {
        res.status(401).send("Unauthorized: No token provided");
        console.log(error);
    }
};

module.exports = authenticate;
