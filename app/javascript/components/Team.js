import React from "react";
import { Image, Row, Container, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css';
import RankDropdown from "./RankDropdown";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            image: props.player_logo,
            name: props.player_name,
            rank: props.player_rank,
        };
    }

    render() {
        return(
            <div className={'profile'}>
                team
            </div>
        );
    }
}

export default Team;