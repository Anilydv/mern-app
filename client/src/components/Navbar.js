import React, { useEffect, useState } from "react";
import axios from "axios";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import logo from "./assests/images/logo.png";

export default function DisplayNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();

    const handleApiLogout = () => {
        return axios
            .get("/logout")
            .then((res) => res)
            .catch((err) => {
                return err.response;
            });
    };

    const handleLogout = async () => {
        try {
            await handleApiLogout();
            history.push("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const navMenu = () => {
        return (
            <>
                <Navbar
                    style={{
                        background: "#173e43",
                        color: "white",
                        padding: "6px 15px",
                    }}
                    light
                    dark
                    expand="md"
                >
                    <NavLink
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                height: "auto",
                                width: "auto",
                                maxHeight: "52px",
                                maxWidth: "225px",
                            }}
                        />
                    </NavLink>
                    <NavbarToggler onClick={toggle} />
                    <Collapse
                        isOpen={isOpen}
                        navbar
                        className=" justify-content-end"
                    >
                        <div>
                            <Nav className="mr-auto " navbar>
                                <NavItem>
                                    <NavLink
                                        style={{
                                            color: "#e7eaea",
                                            textDecoration: "none",
                                            marginRight: "30px",
                                            fontFamily: "fangsong",
                                        }}
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{
                                            color: "#e7eaea",
                                            textDecoration: "none",
                                            marginRight: "30px",
                                            fontFamily: "fangsong",
                                        }}
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{
                                            color: "#e7eaea",
                                            textDecoration: "none",
                                            marginRight: "30px",
                                            fontFamily: "fangsong",
                                        }}
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        style={{
                                            color: "#e7eaea",
                                            textDecoration: "none",
                                            marginRight: "30px",
                                            fontFamily: "fangsong",
                                        }}
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{
                                            color: "#e7eaea",
                                            textDecoration: "none",
                                            marginRight: "10px",
                                            fontFamily: "fangsong",
                                        }}
                                        to="/signup"
                                    >
                                        Register
                                    </NavLink>
                                </NavItem>
                                <NavItem
                                    style={{
                                        color: "#e7eaea",
                                        textDecoration: "none",
                                        marginRight: "10px",
                                        fontFamily: "fangsong",
                                        cursor: "pointer",
                                    }}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </NavItem>
                            </Nav>
                        </div>
                    </Collapse>
                </Navbar>
            </>
        );
    };

    return <>{navMenu()}</>;
}
