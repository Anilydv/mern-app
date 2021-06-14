import React from "react";
import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "25px",
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

export default function Errorpage() {
    const classes = useStyles();

    return (
        <div style={{ background: "#def2f1 " }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "90vh",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <h1
                    style={{
                        fontSize: "200px",
                        fontWeight: 800,
                        color: "#cbd4d285",
                    }}
                >
                    404
                </h1>
                <h2
                    style={{
                        position: "absolute",
                        fontSize: "40px",
                        fontWeight: 700,
                        fontFamily: "fantasy",
                    }}
                >
                    WE ARE SORRY, PAGE NOT FOUND!
                </h2>
                <Button variant="contained" className={classes.button}>
                    Back To Homepage
                </Button>
            </div>
        </div>
    );
}
