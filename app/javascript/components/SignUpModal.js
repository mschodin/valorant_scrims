import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RankDropdown from "./RankDropdown";
import iron1 from '/app/assets/images/ranks/iron1.png';
import iron2 from '/app/assets/images/ranks/iron2.png';
import iron3 from '/app/assets/images/ranks/iron3.png';
import bronze1 from '/app/assets/images/ranks/bronze1.png';
import bronze2 from '/app/assets/images/ranks/bronze2.png';
import bronze3 from '/app/assets/images/ranks/bronze3.png';
import silver1 from '/app/assets/images/ranks/silver1.png';
import silver2 from '/app/assets/images/ranks/silver2.png';
import silver3 from '/app/assets/images/ranks/silver3.png';
import gold1 from '/app/assets/images/ranks/gold1.png';
import gold2 from '/app/assets/images/ranks/gold2.png';
import gold3 from '/app/assets/images/ranks/gold3.png';
import plat1 from '/app/assets/images/ranks/plat1.png';
import plat2 from '/app/assets/images/ranks/plat2.png';
import plat3 from '/app/assets/images/ranks/plat3.png';
import diamond1 from '/app/assets/images/ranks/diamond1.png';
import diamond2 from '/app/assets/images/ranks/diamond2.png';
import diamond3 from '/app/assets/images/ranks/diamond3.png';
import immortal from '/app/assets/images/ranks/immortal3.png';
import radiant from '/app/assets/images/ranks/radiant.png';

function SignUpModal(props) {

    const [errorMessage, setErrorMessage] = React.useState("");
    const [rank, setRank] = React.useState(iron1);

    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    function handleLogin() {
        props.onHide(true);
    }

    function validateSignup(e) {
        e.preventDefault();
        if(formPassword.value !== formRetypePassword.value) {
            setErrorMessage("Passwords must match")
        } else if (formPassword.value.length < 6) {
            setErrorMessage("Password must be at least 6 characters long")
        } else if (!mediumRegex.test(formPassword.value) ) {
            setErrorMessage("Password not strong enough")
        } else {
            checkUserExists();
        }
    }

    function checkUserExists() {
        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, email: formEmail.value})
        fetch(props.exists_route, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html, application/json, application/xhtml+xml, application/xml',
                'X-CSRF-Token': token
            },
            body: body,
        }).then(response => response.json()).then((response) => {
            console.log(response["exists_status"])
            if(response["exists_status"] === true) {
                setErrorMessage("User already exists")
            } else {
                handleSubmit()
            }
        })
    }

    function handleSubmit() {
        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, user: {email: formEmail.value, password: formPassword.value, password_confirmation: formRetypePassword.value}, commit: "Sign up"})
        fetch(props.signup_route, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html, application/json, application/xhtml+xml, application/xml',
                'X-CSRF-Token': token
            },
            body: body,
        }).then((response) => {
            submitProfile();
        })
    }

    function submitProfile() {
        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, player_name: playerName.value, player_rank: rank, player_logo: 'sg_profile_pic.png'})
        fetch(props.create_profile_route, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html, application/json, application/xhtml+xml, application/xml',
                'X-CSRF-Token': token
            },
            body: body,
        }).then((response) => {
            window.location.href = response.url
        })
    }

    function changeRank(newRank) {
        setRank(newRank);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sign Up
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={validateSignup}>
                <Modal.Body>
                    <Form.Group controlId={"formEmail"}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type={"email"} placeholder={"Enter email"} />
                    </Form.Group>
                    <Form.Group controlId={"formPassword"}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={"password"} placeholder={"Password"} />
                    </Form.Group>
                    <Form.Group controlId={"formRetypePassword"}>
                        <Form.Label>Retype Password</Form.Label>
                        <Form.Control type={"password"} placeholder={"Password"} />
                    </Form.Group>
                    <div style={{color: "red"}}>{errorMessage}</div>
                    <Form.Group controlId={"playerName"}>
                        <Form.Label>Player In Game Name</Form.Label>
                        <Form.Control type={"text"} placeholder={"Player Name"} />
                    </Form.Group>
                    <RankDropdown selected_rank={rank} changeRank={changeRank}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} type={"reset"} className={'mr-auto'} onClick={handleLogin}>Log in</Button>
                    <Button variant={"primary"} type={"submit"}>Sign Up</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default SignUpModal;