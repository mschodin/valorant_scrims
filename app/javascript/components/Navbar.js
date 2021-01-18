import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import sg_logo from '/app/assets/images/sg_logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NavBar() {
    return (
        <>
            <Navbar bg="primary">
                <Navbar.Brand href="#home">
                    <img
                        src={sg_logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top logo"
                        alt="Scrub Garden Logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href={"#schedule"}>Schedule</Nav.Link>
                    <Nav.Link href={"#teams"}>Teams</Nav.Link>
                    <Nav.Link href={"#profile"}>Profile</Nav.Link>
                    <Nav.Link href={"#messages"}>Messages</Nav.Link>
                    <Nav.Link href={"#your_scrims"}>Your Scrims</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant={'dark'}>Login</Button>
                </Form>
            </Navbar>
        </>
    );
};

export default NavBar;