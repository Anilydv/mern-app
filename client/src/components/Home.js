import React from "react";

export default function Home() {
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
                        fontSize: "20px",
                        fontWeight: 300,
                        fontFamily: "math",
                    }}
                >
                    WELCOME
                </p>
                <h1 style={{ fontWeight: 300, fontFamily: "fantasy" }}>
                    We Are The MERN Developer
                </h1>
            </div>
        </div>
    );
}
