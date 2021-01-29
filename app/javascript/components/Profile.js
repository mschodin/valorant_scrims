import React from "react";
import sg_logo from '/app/assets/images/sg_logo.png';
import { Image, Row, Container, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css';
import RankDropdown from "./RankDropdown";
import iron1 from '/app/assets/images/ranks/iron1.png';
import iron2 from '/app/assets/images/ranks/iron2.png';
import iron3 from '/app/assets/images/ranks/iron3.png';
import bronze1 from '/app/assets/images/ranks/bronze1.png';
import bronze2 from '/app/assets/images/ranks/bronze2.png';
import bronze3 from '/app/assets/images/ranks/bronze3.png';
import silver1 from '/app/assets/images/ranks/silver1.png';
import silver2 from '/app/assets/images/ranks/silver2.png';
import silver3 from '/app/assets/images/ranks/silver3.png';
import gold1 from '/app/assets/images/ranks/gold1.png';
import gold2 from '/app/assets/images/ranks/gold2.png';
import gold3 from '/app/assets/images/ranks/gold3.png';
import plat1 from '/app/assets/images/ranks/plat1.png';
import plat2 from '/app/assets/images/ranks/plat2.png';
import plat3 from '/app/assets/images/ranks/plat3.png';
import diamond1 from '/app/assets/images/ranks/diamond1.png';
import diamond2 from '/app/assets/images/ranks/diamond2.png';
import diamond3 from '/app/assets/images/ranks/diamond3.png';
import immortal from '/app/assets/images/ranks/immortal3.png';
import radiant from '/app/assets/images/ranks/radiant.png';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            image: sg_logo,
            name: 'PlayerName',
            rank: iron1
        };
    }

    submitChanges = (e) => {
        e.preventDefault();
        console.log('name changed');
        this.setState({
            edit: false
        });
    }

    changeRank = (newRank) => {
        this.setState({
           rank: newRank
        });
    }

    render() {

        let profile_name;
        let edit_button;
        let player_rank;
        if(this.state.edit) {
            profile_name = <Form onSubmit={this.submitChanges} className={'profile_name'}><Form.Group controlId={"newName"}><Form.Control defaultValue={this.state.name}/></Form.Group></Form>
            edit_button = <Button variant={'primary'} onClick={this.submitChanges}>Save</Button>
            player_rank = <RankDropdown selected_rank={this.state.rank} changeRank={this.changeRank}/>
        } else {
            profile_name = <h3 className={'profile_name'}>{this.state.name}</h3>
            edit_button = <Button variant={'primary'} onClick={() => {this.setState({edit: !this.state.edit})}}>Edit</Button>
            player_rank = <Image className={'rank_image'} src={this.state.rank}/>
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