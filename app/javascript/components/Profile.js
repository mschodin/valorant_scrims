import React from "react";
import sg_logo from '/app/assets/images/sg_logo.png';
import { Image, Row, Container, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css';
import RankDropdown from "./RankDropdown";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            image: sg_logo,
            name: 'PlayerName',
        };
    }

    submitChanges = (e) => {
        e.preventDefault();
        console.log('name changed');
        this.setState({
            edit: false
        });
    }

    render() {

        let profile_name;
        let edit_button;
        let player_rank;
        if(this.state.edit) {
            profile_name = <Form onSubmit={this.submitChanges} className={'profile_name'}><Form.Group controlId={"newName"}><Form.Control defaultValue={this.state.name}/></Form.Group></Form>
            edit_button = <Button variant={'primary'} onClick={this.submitChanges}>Save</Button>
            player_rank = <RankDropdown/>
        } else {
            profile_name = <h3 className={'profile_name'}>{this.state.name}</h3>
            edit_button = <Button variant={'primary'} onClick={() => {this.setState({edit: !this.state.edit})}}>Edit</Button>
            player_rank = <RankDropdown/>
        }

        return(
            <div className={'profile'}>
                <Container>
                    {/* Header: Profile image, player name, edit button*/}
                    <Row>
                        <Col>
                            <div className={'profile_picture_and_name'}>
                                <Image className={'profile_picture'} src={sg_logo} rounded/>
                                {profile_name}
                            </div>
                        </Col>
                        <Col>
                            <div className={'profile_edit'}>
                                {edit_button}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className={'profile_rank'}>
                            Player Rank:
                            {player_rank}
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Profile;