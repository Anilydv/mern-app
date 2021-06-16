const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

// mongoDB connect
require("./db/conn");

// use middleware to understand our app in json format(convert json data into object and display)
app.use(express.json());

// we link the router files
app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});
