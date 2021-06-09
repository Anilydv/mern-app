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
                    color="primary"
                    light
                    dark
                    expand="md"
                    style={{ padding: "10px 15px" }}
                >
                    <NavLink
                        to="/"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <NavbarBrand>Mern developer</NavbarBrand>
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
                                            marginRight: "12px",
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
                                            marginRight: "12px",
                                        }}
                                        to="/about"
                                    >
                                        AboutMe
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{
                                            color: "#e7eaea",
                                            textDecoration: "none",
                                            marginRight: "12px",
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
                                            marginRight: "12px",
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
                                            marginRight: "12px",
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
