import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import sg_logo from '/app/assets/images/sg_logo.png';

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
            </Navbar>
        </>
    );
};

export default NavBar;