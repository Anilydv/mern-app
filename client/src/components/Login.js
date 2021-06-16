import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import login from "./assests/images/login.svg";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "130px",
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
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
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

export default function Login() {
    const [userLogin, setUserLogin] = useState({ email: "", password: "" });
    const classes = useStyles();
    const history = useHistory();

    const handleInput = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setUserLogin({ ...userLogin, [name]: value });
    };

    const handleSubmit = async () => {
        const { email, password } = userLogin;
        const data = {
            email,
            password,
        };

        const handleApiCall = () => {
            return axios
                .post("/login", data)
                .then((res) => res)
                .catch((err) => {
                    return err.response;
                });
        };

        const resData = await handleApiCall();

        if (resData.status === 400 || !resData) {
            toast.error("Invalid Credentials");
            console.log("Login error");
        } else {
            toast.success("Login Successful");
            history.push("/");
        }
    };

    return (
        <div className={classes.container}>
            <Paper elevation={3} className={classes.paper}>
                <div className={classes.papperItem}>
                    <div className={classes.imageContainer}>
                        <img
                            className={classes.image}
                            src={login}
                            alt="login"
                        />
                        <br />
                        <h6 style={{ marginTop: " 18px", marginLeft: "55px" }}>
                            {" "}
                            Create an Account
                        </h6>
                    </div>

                    <div className={classes.inputFieldContainer}>
                        <h4 style={{ fontWeight: 800 }}>Login In</h4>
                        <form autoComplete="off">
                            <TextField
                                id="standard-basic"
                                label="Email"
                                name="email"
                                value={userLogin.email}
                                onChange={(e) => handleInput(e)}
                                fullWidth={true}
                                style={{ marginBottom: "8px" }}
                            />

                            <TextField
                                id="standard-basic"
                                type="password"
                                label="Password"
                                name="password"
                                value={userLogin.password}
                                onChange={(e) => handleInput(e)}
                                fullWidth={true}
                                style={{ marginBottom: "8px" }}
                            />

                            <br />

                            <Button
                                variant="contained"
                                className={classes.button}
                                onClick={handleSubmit}
                            >
                                Login In
                            </Button>
                        </form>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
