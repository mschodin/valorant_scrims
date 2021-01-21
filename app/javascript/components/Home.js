import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css'
import NavBar from "./Navbar";

class Home extends React.Component {
    render() {
        return(
            <div>
                <NavBar
                    signup_route={this.props.signup_route}
                    login_route={this.props.login_route}
                    signed_in={this.props.signed_in}
                    logout_route={this.props.logout_route}
                    reset_password={this.props.reset_password}
                />
                <p>
                    You are on the home page!
                </p>
                <Button variant="primary">Test Button</Button>
            </div>
        );
    }
}

export default Home;