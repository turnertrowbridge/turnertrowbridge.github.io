import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import "../styles/MyNavbar.css";

function MyNavbar() {
    return (
        <Navbar className="MyNavbar" expand="lg">
            <Navbar.Brand href="/">Turner's Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link href="/">Github</Nav.Link>
                    <Nav.Link href="/">LinkedIn</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;