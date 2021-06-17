const express = require("express");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

// require("userSchema");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    // let token = "anill";
    // res.cookie("jwtoken", token, {
    //     expires: new Date(Date.now() + 25892000000),
    //     httpOnly: true,
    // });
    res.send("Hello world from the server router js hye");
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
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" });
        } else {
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
        }
    } catch (error) {
        console.log(error);
    }
});

// login route

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "plz filled the data" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            // store jwt token in cookie and expire after 30 days automatically
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
            });

            // console.log("jwt", token);

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials" });
            } else {
                res.status(200).json({ message: "User Login Successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials" });
        }
    } catch (error) {
        console.log(error);
    }
});

// about us page

router.get("/about", authenticate, (req, res) => {
    console.log("hello my about");
    res.send(req.user);
});

router.get("/getData", authenticate, (req, res) => {
    console.log("hello my about");
    res.send(req.user);
});

// contact us page

router.post("/contact", authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res
                .status(422)
                .json({ error: "Plz filled all the field properly" });
        }

        const userContact = await User.findOne({ _id: req.userID });

        if (userContact) {
            await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({
                message: "message sent successfully",
            });
        }
    } catch (error) {
        console.log("contact error", error);
    }
});

// userLogout

router.get("/logout", (req, res) => {
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send("User logout");
});

module.exports = router;
