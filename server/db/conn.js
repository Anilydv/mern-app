const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("mongoDB connection successfully");
    })
    .catch((err) => console.log("Database connection failed", err));
