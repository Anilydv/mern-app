const express = require("express");

const app = express();
const port = 5000;

// Middleware
const middleware = (req, res, next) => {
    console.log("hello my middleware");
    next();
};

app.get("/", (req, res) => {
    res.send("Hello world from the server");
});
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

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
