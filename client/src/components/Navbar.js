import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default function DisplayNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const navMenu = () => {
        return (
            <>
                <Navbar
                    style={{
                        background: "#173e43",
                        color: "white",
                        padding: "18px 15px",
                    }}
                    light
                    dark
                    expand="md"
                >
                    <NavLink
                        to="/"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <NavbarBrand style={{ color: "white" }}>
                            Mern developer
                        </NavbarBrand>
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
                                            marginRight: "18px",
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
                                            marginRight: "18px",
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
                                            marginRight: "18px",
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
                                            marginRight: "18px",
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
                                            // marginRight: "18px",
                                        }}
                                        to="/signup"
                                    >
                                        Register
                                    </NavLink>
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
