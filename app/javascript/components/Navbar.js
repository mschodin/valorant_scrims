import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import sg_logo from '/app/assets/images/sg_logo.png';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal'
import SignUpModal from "./SignUpModal";

function NavBar(props) {
    const [loginShow, setLoginShow] = React.useState(false);
    const [signupShow, setSignupShow] = React.useState(false);

    function logout() {
        fetch(props.logout_route, {
            method: 'delete'
        })
    }

    let button;
    if(props.signed_in) {
        button = <Button onClick={logout} variant={'dark'}>Logout</Button>
    } else {
        button = <Button onClick={() => setLoginShow(true)} variant={'dark'}>Login</Button>
    }

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

                {button}
                {/*<Button onClick={() => setLoginShow(true)} variant={'dark'}>Login</Button>*/}
            </Navbar>
            <LoginModal
                show={loginShow}
                onHide={() => setLoginShow(false)}
                showSignup={() => setSignupShow(true)}
            />
            <SignUpModal
                show={signupShow}
                onHide={() => setSignupShow(false)}
                showLogin={() => setLoginShow(true)}
                signup_route={props.signup_route}
            />
        </>
    );
};

export default NavBar;