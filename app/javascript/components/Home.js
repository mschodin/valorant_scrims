import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css'

class Home extends React.Component {
    render() {
        return(
            <div>
                <h1 style={{color: "white"}}>
                    HOME PAGE
                </h1>
            </div>
        );
    }
}

export default Home;