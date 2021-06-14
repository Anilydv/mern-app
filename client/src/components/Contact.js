import React, { useEffect, useState } from "react";
import { Button, Container, makeStyles, Paper } from "@material-ui/core";
import { Form, FormGroup, Input } from "reactstrap";
const useStyles = makeStyles((theme) => ({
    // container: {
    //     marginTop: "130px",
    //     marginLeft: "150px",
    //     marginRight: "150px",
    //     "@media only screen and (max-width: 414px)": {
    //         marginLeft: "0px!important",
    //         marginRight: "0px!important",
    //     },
    //     "@media only screen and (max-width: 1024px)": {
    //         marginLeft: "80px",
    //         marginRight: "80px",
    //     },
    // },
    // image: {
    //     width: "250px",
    // },

    // papperItem: {
    //     display: "flex",
    //     padding: "60px 0px",
    //     justifyContent: "space-around",
    // },
    // inputFieldContainer: {
    //     width: "45%",
    //     "@media only screen and (max-width: 414px)": {
    //         width: "70%",
    //     },
    // },
    // imageContainer: {
    //     // display: "flex",
    //     // justifyContent: "center",
    //     // alignItems: "center",
    //     textAlign: "center",
    //     "@media only screen and (max-width: 414px)": {
    //         display: "none",
    //     },
    // },
    // button: {
    //     marginTop: "30px",
    //     textTransform: "capitalize",
    //     letterSpacing: "3px",
    //     width: "100%",
    //     fontWeight: 600,
    //     "&.MuiButton-root ": {
    //         background: theme.palette.primary.light,
    //         color: "white",
    //     },
    //     "&:hover": {
    //         background: theme.palette.primary.main,
    //     },
    // },

    displayInfo: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        "@media only screen and (max-width: 414px)": {
            display: "block",
        },
    },
    infoBoxPapper: {
        width: "300px",
        padding: "8px 0px",
        textAlign: "center",
        marginRight: "8px",

        "@media only screen and (max-width: 414px)": {
            // boxShadow: "none",
            width: "100%",
            marginRight: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            marginBottom: "10px",
        },
    },
    titleHeader: {
        "@media only screen and (max-width: 414px)": {
            fontSize: "35px !important",
            marginRight: "18px !important",
        },
    },
    subTitle: {
        "@media only screen and (max-width: 414px)": {
            fontSize: "30px",
            wordBreak: "break-all",
        },
    },
    button: {
        marginLeft: "65px",
        textTransform: "capitalize",
        letterSpacing: "3px",
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

export default function Contact() {
    const [screenWidth, setScreenWidth] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        window.addEventListener("resize", () => {
            const myWidth = window.innerWidth;
            if (myWidth <= 414) {
                // console.log("my width :::", myWidth);
                setScreenWidth(true);
            } else {
                setScreenWidth(false);
            }
        });
    }, [screenWidth]);

    const displayInfo = () => {
        return (
            <div className={classes.displayInfo}>
                <Paper elevation={3} className={classes.infoBoxPapper}>
                    <h5 className={classes.titleHeader}>
                        Phone {screenWidth ? ":" : ""}{" "}
                    </h5>
                    <h5 className={classes.subTitle}>9819997153</h5>
                </Paper>
                <Paper elevation={3} className={classes.infoBoxPapper}>
                    <h5 className={classes.titleHeader}>
                        Email {screenWidth ? ":" : ""}{" "}
                    </h5>
                    <h6 className={classes.subTitle}>anil@gmail.com</h6>
                </Paper>
                <Paper elevation={3} className={classes.infoBoxPapper}>
                    <h5 className={classes.titleHeader}>
                        Address {screenWidth ? ":" : ""}{" "}
                    </h5>
                    <h6 className={classes.subTitle}>Biratnagar</h6>
                </Paper>
            </div>
        );
    };

    const contactInputField = () => {
        return (
            <Paper style={{ marginTop: "70px", padding: "30px" }}>
                <div>
                    <h4
                        style={{
                            fontWeight: 800,
                            marginLeft: "70px",
                            marginBottom: "22px",
                        }}
                    >
                        Get in Touch
                    </h4>
                    <Form>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                margin: "0px 30px",
                            }}
                        >
                            <FormGroup>
                                <Input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="number"
                                    name="number"
                                    id="number"
                                    placeholder="Number"
                                />
                            </FormGroup>
                        </div>
                        <FormGroup style={{ margin: "30px 65px" }}>
                            <Input
                                type="textarea"
                                name="textarea"
                                id="textarea"
                                placeholder="Message"
                            />
                        </FormGroup>
                        <Button variant="contained" className={classes.button}>
                            Send Message
                        </Button>
                    </Form>
                </div>
            </Paper>
        );
    };

    return (
        <Container maxWidth="md" style={{ marginTop: "50px" }}>
            {displayInfo()}
            {contactInputField()}
        </Container>
    );
}
