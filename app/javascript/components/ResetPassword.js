import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css'
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = { errorMessage: "" }
    }

    render() {
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        function validatePassword() {
            e.preventDefault();
            if(formPassword.value !== formRetypePassword.value) {
                this.setState({
                   errorMessage: "Passwords must match"
                });
            } else if (formPassword.value.length < 6) {
                this.setState({
                    errorMessage: "Password must be at least 6 characters long"
                });
            } else if (!mediumRegex.test(formPassword.value) ) {
                this.setState({
                    errorMessage: "Password not strong enough"
                });
            } else {
                submitPasswordReset();
            }
        }

        function submitPasswordReset() {
            let token = $('meta[name=csrf-token]').attr('content');
            let body = JSON.stringify({authenticity_token: token, user: {reset_password_token: this.props.reset_token, password: formPassword.value, password_confirmation: formRetypePassword.value}, commit: "Change my password"})
            fetch(this.props.reset_route, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/html, application/json, application/xhtml+xml, application/xml',
                    'X-CSRF-Token': token
                },
                body: body,
            }).then(response => response.json()).then((response) => {
            })
        }

        return(
            <div className={'reset'}>
                <h1>Reset Password</h1>
                <Form onSubmit={validatePassword}>
                    <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId={"formPassword"}>
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type={"password"} placeholder={"Password"} />
                        </Form.Group>
                        <Form.Group controlId={"formRetypePassword"}>
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control type={"password"} placeholder={"Password"} />
                        </Form.Group>
                        <div style={{color: "red"}}>{this.state.errorMessage}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={"primary"} type={"submit"}>Submit</Button>
                    </Modal.Footer>
                </Form>
            </div>
        );
    }
}

export default ResetPassword;