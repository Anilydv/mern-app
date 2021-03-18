const express = require("express");
const { findOne } = require("../model/userSchema");
const router = express.Router();

// require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send("Hello world from the server router js");
});

router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res
            .status(422)
            .json({ error: "Plz filled all the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }

        const user = new User({
            name,
            email,
            phone,
            work,
            password,
            cpassword,
        });

        await user.save();

        res.status(201).json({
            message: "user registered successfully",
        });
    } catch (error) {
        console.log(error);
    }
});

// login route

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "plz filled the data" });
        }

        const userLogin = await User.findOne({ email: email });

        if (!userLogin) {
            res.status(400).json({ error: "user error" });
        } else {
            res.status(200).json({ message: "user signin successfully" });
        }
    } catch (error) {}
});

module.exports = router;
