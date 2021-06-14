import React, { useState } from "react";
import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import signup from "./assests/images/signup.svg";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "30px",
        marginLeft: "150px",
        marginRight: "150px",
        "@media only screen and (max-width: 414px)": {
            marginLeft: "0px!important",
            marginRight: "0px!important",
        },
        "@media only screen and (max-width: 1024px)": {
            marginLeft: "80px",
            marginRight: "80px",
        },
    },
    image: {
        width: "250px",
    },
    paper: {
        "@media only screen and (max-width: 414px)": {
            boxShadow: "none",
        },
    },
    papperItem: {
        display: "flex",
        padding: "60px 0px",
        justifyContent: "space-around",
    },
    inputFieldContainer: {
        width: "45%",
        "@media only screen and (max-width: 414px)": {
            width: "70%",
        },
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        "@media only screen and (max-width: 414px)": {
            display: "none",
        },
    },
    button: {
        marginTop: "30px",
        textTransform: "capitalize",
        letterSpacing: "3px",
        width: "100%",
        fontWeight: 600,
        "&.MuiButton-root ": {
            background: theme.palette.primary.light,
            color: "white",
        },
        "&:hover": {
            background: theme.palette.primary.main,
        },
    },
}));

export default function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        profession: "",
        password: "",
        cpassword: "",
    });
    const classes = useStyles();

    const handleInput = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handlePostData = (e) => {
        e.preventDefault();
        console.log("hello");
    };

    return (
        <div className={classes.container}>
            <Paper elevation={3} className={classes.paper}>
                <div className={classes.papperItem}>
                    <div className={classes.inputFieldContainer}>
                        <h4 style={{ fontWeight: 800 }}>Sign up</h4>
                        <form autoComplete="off">
                            <TextField
                                id="standard-basic"
                                fullWidth={true}
                                onChange={(e) => handleInput(e)}
                                label="Name"
                                name="name"
                                value={user.name}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Email"
                                name="email"
                                value={user.email}
                                fullWidth={true}
                                onChange={(e) => handleInput(e)}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Phone"
                                type="number"
                                fullWidth={true}
                                onChange={(e) => handleInput(e)}
                                name="phone"
                                value={user.phone}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Profession"
                                name="profession"
                                value={user.profession}
                                fullWidth={true}
                                onChange={(e) => handleInput(e)}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Password"
                                name="password"
                                type="password"
                                value={user.password}
                                fullWidth={true}
                                onChange={(e) => handleInput(e)}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Confirm Passsword"
                                name="cpassword"
                                type="password"
                                value={user.cpassword}
                                fullWidth={true}
                                onChange={(e) => handleInput(e)}
                            />
                            <br />

                            <Button
                                variant="contained"
                                className={classes.button}
                                type="submit"
                                onClick={handlePostData}
                            >
                                Register
                            </Button>
                        </form>
                    </div>
                    <div className={classes.imageContainer}>
                        <img
                            className={classes.image}
                            src={signup}
                            alt="signup"
                        />

                        <h6 style={{ marginTop: " 18px", marginLeft: "55px" }}>
                            {" "}
                            I am already register
                        </h6>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
