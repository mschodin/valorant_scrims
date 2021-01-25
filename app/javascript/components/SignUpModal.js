import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUpModal(props) {

    const [errorMessage, setErrorMessage] = React.useState("");

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
            if(response.status === 200) {
                window.location.reload();
            }
        })
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