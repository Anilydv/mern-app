import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import {
    Button,
    Grid,
    makeStyles,
    Paper,
    Typography,
    ButtonBase,
} from "@material-ui/core";
import pic from "./assests/images/IMG_4105.JPG";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "100px",
        "@media only screen and (max-width: 414px)": {
            margin: "0px",
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    image: {
        width: 128,
        height: 128,
    },
    userImg: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    button: {
        textTransform: "capitalize",
        letterSpacing: "3px",
        fontWeight: 600,
        marginTop: "10px",
        "&.MuiButton-root ": {
            background: theme.palette.primary.light,
            color: "white",
        },
        "&:hover": {
            background: theme.palette.primary.main,
        },
    },
    buttonDesign: {
        textTransform: "capitalize",
        padding: "0px 8px",
        fontWeight: 600,
        marginTop: "10px",
        marginRight: "10px",
        "&.MuiButton-root ": {
            background: theme.palette.primary.light,
            color: "white",
        },
        "&:hover": {
            background: theme.palette.primary.main,
        },
    },
}));

export default function About() {
    const [showAbout, setShowAbout] = useState(true);
    const classes = useStyles();

    const handleApiCall = () => {
        return axios
            .get("/about", {
                withCredentials: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res)
            .catch((err) => {
                return err.response;
            });
    };

    const callAboutPage = async () => {
        // try {
        //     const res = await handleApiCall();
        //     console.log(res);
        // } catch (error) {
        //     console.log(error);
        // }

        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img
                                className={classes.userImg}
                                alt="userImage"
                                src={pic}
                            />
                        </ButtonBase>
                        <div
                            style={{
                                marginLeft: "18px",
                                marginTop: "15px",
                                marginBottom: "15px",
                                marginRight: "10px",
                            }}
                        >
                            <Typography gutterBottom variant="subtitle1">
                                WORK Link
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Developer
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Software Engineer
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Youtube
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    anil kumar yadav
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    web Developer
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    RANKINGS : 1/10
                                </Typography>
                                <Button
                                    variant="contained"
                                    className={classes.buttonDesign}
                                    onClick={() => setShowAbout(true)}
                                >
                                    About
                                </Button>
                                <Button
                                    variant="contained"
                                    className={classes.buttonDesign}
                                    onClick={() => setShowAbout(false)}
                                >
                                    TimeLine
                                </Button>
                                <hr />
                                {showAbout && (
                                    <div>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td>User Id</td>
                                                    <td>3489129082349841</td>
                                                </tr>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>Anil Kumar Yadav</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td>anilkumar@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Phone</td>
                                                    <td>9819997153</td>
                                                </tr>
                                                <tr>
                                                    <td>Profession</td>
                                                    <td>Web Developer</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                )}
                                {!showAbout && (
                                    <div>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td>Experience</td>
                                                    <td>Expert</td>
                                                </tr>
                                                <tr>
                                                    <td>Hourly Rate</td>
                                                    <td>$10/hr</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Projects</td>
                                                    <td>230</td>
                                                </tr>
                                                <tr>
                                                    <td>English Level</td>
                                                    <td>Expert</td>
                                                </tr>
                                                <tr>
                                                    <td>Availability</td>
                                                    <td>6 months</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                className={classes.button}
                            >
                                Edit Profile
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
