import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Container, makeStyles, Paper } from "@material-ui/core";
import { Form, FormGroup, Input } from "reactstrap";
const useStyles = makeStyles((theme) => ({
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
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const classes = useStyles();

    const handleApiCall = () => {
        return axios
            .get("/getData", {
                withCredentials: true,
            })
            .then((res) => res)
            .catch((err) => {
                return err.response;
            });
    };

    const callContactPage = async () => {
        try {
            const res = await handleApiCall();

            setUserData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        callContactPage();
    }, []);

    // const displayInfo = () => {
    //     return (
    //         <div className={classes.displayInfo}>
    //             <Paper elevation={3} className={classes.infoBoxPapper}>
    //                 <h5 className={classes.titleHeader}>Phone</h5>
    //                 <h5 className={classes.subTitle}>9819997153</h5>
    //             </Paper>
    //             <Paper elevation={3} className={classes.infoBoxPapper}>
    //                 <h5 className={classes.titleHeader}>Email</h5>
    //                 <h6 className={classes.subTitle}>anil@gmail.com</h6>
    //             </Paper>
    //             <Paper elevation={3} className={classes.infoBoxPapper}>
    //                 <h5 className={classes.titleHeader}>Address</h5>
    //                 <h6 className={classes.subTitle}>Biratnagar</h6>
    //             </Paper>
    //         </div>
    //     );
    // };

    const handleInput = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;

        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async () => {
        const { name, email, phone, message } = userData;

        const data = {
            name,
            email,
            phone,
            message,
        };

        const handleApiCall = () => {
            return axios
                .post("/contact", data)
                .then((res) => res)
                .catch((err) => {
                    return err.response;
                });
        };
        const resData = await handleApiCall();

        if (resData.status === 422 || !resData) {
            toast.error("please fillout the form");
        } else {
            toast.success("message send successfull");
        }
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
                                    onChange={(e) => handleInput(e)}
                                    value={userData.name}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={(e) => handleInput(e)}
                                    value={userData.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="number"
                                    name="phone"
                                    id="number"
                                    placeholder="Number"
                                    onChange={(e) => handleInput(e)}
                                    value={userData.phone}
                                />
                            </FormGroup>
                        </div>
                        <FormGroup style={{ margin: "30px 65px" }}>
                            <Input
                                type="textarea"
                                name="message"
                                id="textarea"
                                placeholder="Message"
                                onChange={(e) => handleInput(e)}
                                value={userData.message}
                            />
                        </FormGroup>
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={handleSubmit}
                        >
                            Send Message
                        </Button>
                    </Form>
                </div>
            </Paper>
        );
    };

    return (
        <Container maxWidth="md" style={{ marginTop: "50px" }}>
            {contactInputField()}
        </Container>
    );
}
