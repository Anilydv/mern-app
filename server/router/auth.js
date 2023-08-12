const express = require("express");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

// require("userSchema");
const User = require("../model/userSchema");

const Ranking = require("../model/DevelperRankingSchema");

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
    return res.status(422).json({ error: "Plz filled all the field properly" });
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
  res.send(req.user);
});

router.get("/getData", authenticate, (req, res) => {
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

router.post("/rankingFormSubmit", async (req, res) => {
  const {
    userId,
    technicalSkills,
    projectPortfolio,
    problemSolving,
    experience,
    communicationSkills,
    totalRankingPoints,
  } = req.body;
  if (
    (!userId,
    !technicalSkills ||
      !projectPortfolio ||
      !problemSolving ||
      !experience ||
      !communicationSkills ||
      !totalRankingPoints)
  ) {
    return res.status(422).json({ error: "Plz filled all the field properly" });
  }

  try {
    const userRanking = await Ranking.findOne({ userId: userId });
    if (userRanking) {
      return res.status(422).json({ error: "Developer ranking already exist" });
    } else {
      const ranking = new Ranking({
        userId,
        technicalSkills,
        projectPortfolio,
        problemSolving,
        experience,
        communicationSkills,
        totalRankingPoints,
      });
      await ranking.save();
      res.status(201).json({
        message: "Developer ranking successfully submited",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// userLogout

router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User logout");
});
router.get("/getRanking", async (req, res) => {
  try {
    const userCount = await Ranking.countDocuments();
    const highestRanking = await Ranking.findOne().sort({
      totalRankingPoints: -1,
    });

    const currentUser = await Ranking.findOne({
      userId: "64d590bee112246864234b05",
    });

    const currentUserPosition =
      (await Ranking.find({
        totalRankingPoints: { $gt: currentUser.totalRankingPoints },
      }).countDocuments()) + 1;

    res.send({
      totalUsers: userCount,
      highestPoints: highestRanking.totalRankingPoints,
      currentUserPoints: currentUser.totalRankingPoints,
      currentUserPosition,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
