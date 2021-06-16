import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [userName, setUserName] = useState("");

    const handleApiCall = () => {
        return axios
            .get("/getData")
            .then((res) => res)
            .catch((err) => {
                return err.response;
            });
    };

    const callContactPage = async () => {
        try {
            const res = await handleApiCall();

            setUserName(res.data.name);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        callContactPage();
    }, []);

    return (
        <div
            style={{
                background:
                    "linear-gradient(to left, #def2f1  50%, #97d2d0 50%)",
                height: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div style={{ textAlign: "center" }}>
                <p
                    style={{
                        color: "blue",
                        fontSize: "16px",
                        fontWeight: 300,
                        fontFamily: "math",
                        margin: "2px",
                    }}
                >
                    WELCOME
                </p>
                <h1
                    style={{
                        fontFamily: "monospace",
                        fontWeight: "bold",
                        fontSize: "50px",
                        marginBottom: "18px",
                    }}
                >
                    {userName}
                </h1>
                {userName ? (
                    <h1 style={{ fontWeight: 300, fontFamily: "fantasy" }}>
                        Happy, to see you back
                    </h1>
                ) : (
                    <h1 style={{ fontWeight: 300, fontFamily: "fantasy" }}>
                        We Are The MERN Developer
                    </h1>
                )}
            </div>
        </div>
    );
}
