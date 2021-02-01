import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import sg_logo from '/app/assets/images/sg_logo.png';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal'
import SignUpModal from "./SignUpModal";
import ForgotPasswordModal from "./ForgotPasswordModal";

function NavBar(props) {
    const [loginShow, setLoginShow] = React.useState(false);
    const [signupShow, setSignupShow] = React.useState(false);
    const [forgotPasswordShow, setForgotPasswordShow] = React.useState(false);

    function logout() {
        let token = $('meta[name=csrf-token]').attr('content');
        fetch(props.logout_route, {
            method: 'delete',
            headers: {
                'X-CSRF-Token': token
            }
        }).then(() => {
            window.location.reload();
        })
    }

    let button;
    let email;
    if(props.signed_in) {
        email = <div style={{marginRight: '15px', color: 'white'}}> {props.current_user} </div>
        button = <Button onClick={logout} variant={'dark'}>Logout</Button>
    } else {
        email = "";
        button = <Button onClick={() => setLoginShow(true)} variant={'dark'}>Login</Button>
    }

    return (
        <>
            <Navbar bg="primary">
                <Navbar.Brand href="/home">
                    <img
                        src={sg_logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top logo"
                        alt="Scrub Garden Logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href={"/schedule"}>Schedule</Nav.Link>
                    <Nav.Link href={"/teams"}>Teams</Nav.Link>
                    <Nav.Link href={"/profile"}>Profile</Nav.Link>
                    <Nav.Link href={"/messages"}>Messages</Nav.Link>
                    <Nav.Link href={"/your_scrims"}>Your Scrims</Nav.Link>
                </Nav>
                {email}
                {button}
            </Navbar>
            <LoginModal
                show={loginShow}
                onHide={(showSignup, showForgotPassword) => {
                    setLoginShow(false);
                    setSignupShow(showSignup);
                    setForgotPasswordShow(showForgotPassword)
                }}
                login_route={props.login_route}
                status_route={props.status_route}
            />
            <SignUpModal
                show={signupShow}
                onHide={(showLogin) => {
                    setSignupShow(false);
                    setLoginShow(showLogin);
                }}
                signup_route={props.signup_route}
                exists_route={props.exists_route}
                create_profile_route={props.create_profile_route}
            />
            <ForgotPasswordModal
                show={forgotPasswordShow}
                onHide={(showLogin) => {
                    setForgotPasswordShow(false);
                    setLoginShow(showLogin)
                }}
                reset_password={props.reset_password}
            />
        </>
    );
};

export default NavBar;