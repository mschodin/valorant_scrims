import React from "react";
import { Image, Row, Container, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css';
import RankDropdown from "./RankDropdown";
import Modal from "react-bootstrap/Modal";

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            image: props.player_logo,
            name: props.player_name,
            rank: props.player_rank,
        };
    }

    createTeam = () => {
        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, profile_id: 1, team_name: teamName.value})
        fetch(this.props.create_team_path, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html, application/json, application/xhtml+xml, application/xml',
                'X-CSRF-Token': token
            },
            body: body,
        }).then((response) => {
            console.log(response)
        })
    }

    render() {
        return(
            <div className={'profile'}>
                teams
                <Form onSubmit={this.createTeam}>
                    <Modal.Body>
                        <Form.Group controlId={"teamName"}>
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control type={"text"} placeholder={"Enter Team Name"} />
                        </Form.Group>
                        <Form.Group controlId={"captain"}>
                            <Form.Label>Captain</Form.Label>
                            <Form.Control type={"text"} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        {/*<Button variant={"secondary"} type={"reset"} className={'mr-auto'} onClick={handleLogin}>Cancel</Button>*/}
                        <Button closeButton>Cancel</Button>
                        <Button variant={"primary"} type={"submit"}>Create</Button>
                    </Modal.Footer>
                </Form>
            </div>
        );
    }
}

export default Teams;