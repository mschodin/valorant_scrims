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
                <NavBar/>
                <p>
                    You are on the home page!
                </p>
                <Button variant="primary">Test Button</Button>
            </div>
        );
    }
}

export default Home;