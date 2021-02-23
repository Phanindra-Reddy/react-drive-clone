import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import DriveLogo from '../media/drive img.png';

export default function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center justify-content-center">
                <img
                    alt=""
                    src={DriveLogo}
                    width="20"
                    height="20"
                    className="d-inline-block align-top mr-2"
                />
                Drive
            </Navbar.Brand>

            <Nav>
                <Nav.Link as={Link} to="/user">
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
