import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function handleSubmit() {
    console.log("submitted")
}

function LoginModal(props) {

    function handleSignup() {
        props.onHide(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, user: {email: formEmail.value, password: formPassword.value, remember_me: "0"}, commit: "Log in"})
        fetch(props.login_route, {
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
                    Login
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId={"formEmail"}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type={"email"} placeholder={"Enter email"} />
                    </Form.Group>
                    <Form.Group controlId={"formPassword"}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={"password"} placeholder={"Password"} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} type={"reset"} className={'mr-auto'} onClick={handleSignup}>Sign Up</Button>
                    <Button variant={"primary"} type={"submit"}>Submit</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default LoginModal;