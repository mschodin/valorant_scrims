import React from "react";
import { Image, Row, Container, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css';
import RankDropdown from "./RankDropdown";
import Modal from "react-bootstrap/Modal";
import LoginModal from "./LoginModal";
import CreateTeamModal from "./CreateTeamModal";

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            image: props.player_logo,
            name: props.player_name,
            rank: props.player_rank,
            showCreateTeam: false
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
                <Button onClick={() => this.setState({showCreateTeam: true})}>Create Team</Button>
                <Button onClick={() => console.log(this.props.player_list)}>List Players</Button>
                <CreateTeamModal
                    show={this.state.showCreateTeam}
                    onHide={() => this.setState({showCreateTeam: false})}
                    create_team_path={this.props.create_team_path}
                    player_list={this.props.player_list}
                />
            </div>
        );
    }
}

export default Teams;