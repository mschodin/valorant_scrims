import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ForgotPasswordModal(props) {

    const [noticeMessage, setNoticeMessage] = React.useState("");

    function handleLogin() {
        props.onHide(true);
    }

    function handleSubmit(e) {
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
        }).then((response) => {
            setNoticeMessage("A reset link has been sent to your email.")
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
                    Forgot Password
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId={"formEmail"}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type={"email"} placeholder={"Enter email"} />
                    </Form.Group>
                    <div style={{color: "green"}}>{noticeMessage}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} type={"reset"} className={'mr-auto'} onClick={handleLogin}>Log In</Button>
                    <Button variant={"primary"} type={"submit"}>Submit</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default ForgotPasswordModal;