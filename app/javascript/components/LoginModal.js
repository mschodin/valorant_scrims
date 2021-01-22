import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginModal(props) {

    const [errorMessage, setErrorMessage] = React.useState("");

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
            console.log(props.signed_in);
            if(props.signed_in === false)
            {
                setErrorMessage("Invalid Email or Password");
            }
            else
            {
                setErrorMessage("");
                window.location.reload();
            }
        })
    }

    function handleForgotPassword(e) {
        e.preventDefault();
        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, user: {email: formEmail.value}});
        fetch(props.reset_password, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html, application/json, application/xhtml+xml, application/xml',
                'X-CSRF-Token': token
            },
            body: body,
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
                    <div style={{color: "red"}}>{errorMessage}</div>
                    <a href={""} onClick={handleForgotPassword}>Forgot password?</a>
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