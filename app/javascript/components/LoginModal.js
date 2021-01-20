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