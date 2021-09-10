import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Link to='/'>
            <Navbar.Brand href="/">Padho And Bado</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to='/' style={null}>
                <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link to='/tests/SSC-SET-1'>
                <Nav.Link href="/tests/SSC-SET-1">Sample Tests</Nav.Link>
            </Link>
            <NavDropdown title="Syllabus" id="basic-nav-dropdown">
                <Link style={null} to="/syllabus/SSC">
                    <NavDropdown.Item href="/syllabus/SSC">SSC</NavDropdown.Item>
                </Link>
                <Link style={null} to="/syllabus/Bank PO">
                    <NavDropdown.Item href="/syllabus/Bank PO">Bank PO</NavDropdown.Item>
                </Link>
                <Link style={null} to="/syllabus/UPSC">
                    <NavDropdown.Item href="/syllabus/UPSC">UPSC</NavDropdown.Item>
                </Link>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar;