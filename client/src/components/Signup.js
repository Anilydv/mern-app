import React from "react";
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
        alignItems: "center",
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
    const classes = useStyles();
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
                                label="Name"
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Email"
                                fullWidth={true}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Phone"
                                fullWidth={true}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Profession"
                                fullWidth={true}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Password"
                                fullWidth={true}
                                style={{ marginBottom: "8px" }}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Confirm Passsword"
                                fullWidth={true}
                            />
                            <br />

                            <Button
                                variant="contained"
                                className={classes.button}
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
                    </div>
                </div>
            </Paper>
        </div>
    );
}
