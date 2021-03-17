const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
// mongoDB connect
require("./db/conn");
//  const User = require("./model/userSchema")

// use middleware to understand our app in json format
// convert json data into object and display
app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middleware
const middleware = (req, res, next) => {
    console.log("hello my middleware");
    next();
};

// app.get("/", (req, res) => {
//     res.send("Hello world from the server");
// });

app.get("/about", middleware, (req, res) => {
    console.log("hello about");
    res.send("Hello About world form the server");
});

app.get("/contact", (req, res) => {
    res.send("Hello Contact world from the server");
});
app.get("/signin", (req, res) => {
    res.send("Hello Login world from the server");
});
app.get("/signup", (req, res) => {
    res.send("Hello Register world from the server");
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});
