import React from "react";
import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import signup from "./assests/images/signup.svg";

const useStyles = makeStyles(() => ({
    container: {
        marginTop: "55px",
        marginLeft: "150px",
        marginRight: "150px",
    },
    image: {
        width: "250px",
    },
    papperItem: {
        display: "flex",
        padding: "60px 0px",
        justifyContent: "space-around",
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function Signup() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Paper elevation={3}>
                <div className={classes.papperItem}>
                    <div style={{ width: "45%" }}>
                        <h4 style={{ fontWeight: 800 }}>Sign up</h4>
                        <form autoComplete="off">
                            <TextField
                                id="standard-basic"
                                fullWidth={true}
                                label="Name"
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Email"
                                fullWidth={true}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Phone"
                                fullWidth={true}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Profession"
                                fullWidth={true}
                            />
                            <br />
                            <TextField
                                id="standard-basic"
                                label="Password"
                                fullWidth={true}
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
                                color="primary"
                                style={{ marginTop: "24px" }}
                            >
                                register
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
