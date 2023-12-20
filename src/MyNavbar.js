import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Turner's Website</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default MyNavbar;