import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

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
                    <NavbarBrand href="/">Mern developer</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse
                        isOpen={isOpen}
                        navbar
                        className=" justify-content-end"
                    >
                        <div className="amnil">
                            <Nav className="mr-auto " navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about">AboutMe</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/register">Register</NavLink>
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
