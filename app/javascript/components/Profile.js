import React from "react";
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
            image: props.player_logo,
            name: props.player_name,
            rank: props.player_rank,
        };
    }

    submitChanges = (e) => {
        e.preventDefault();
        this.setState({
            edit: false,
            name: newName.value
        });
        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, profile_name: newName.value, profile_rank: this.state.rank})
        fetch(this.props.change_name_route, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html, application/json, application/xhtml+xml, application/xml',
                'X-CSRF-Token': token
            },
            body: body,
        }).then((response) => {
            window.location.href = response.url
        })
    }

    changeRank = (newRank) => {
        this.setState({
           rank: newRank
        });
    }

    changeLogo = () => {
        
    }

    render() {

        let profile_name;
        let edit_button;
        let player_rank;
        let edit_image_text;
        let player_logo = <Image className={'profile_picture'} src={require('../../assets/images/profile_pictures/' + this.state.image)} rounded/>;
        if(this.state.edit) {
            profile_name = <Form onSubmit={this.submitChanges} className={'profile_name'}><Form.Group controlId={"newName"}><Form.Control defaultValue={this.state.name}/></Form.Group></Form>
            edit_button = <Button variant={'primary'} onClick={this.submitChanges}>Save</Button>
            player_rank = <RankDropdown selected_rank={this.state.rank} changeRank={this.changeRank}/>
            edit_image_text = <div className={'edit_image_boundary'} onClick={this.changeLogo}><h3 className={'edit_image_text'}>EDIT</h3></div>
        } else {
            profile_name = <h3 className={'profile_name'}>{this.state.name}</h3>
            edit_button = <Button disabled={this.props.signed_in_user !== this.props.player_id} variant={'primary'} onClick={() => {this.setState({edit: !this.state.edit})}}>Edit</Button>
            player_rank = <Image className={'rank_image'} src={this.state.rank}/>
            edit_image_text = <h3></h3>
        }

        return(
            <div className={'profile'}>
                <Container>
                    {/* Header: Profile image, player name, edit button*/}
                    <Row>
                        <Col>
                            <div className={'profile_picture_and_name'}>
                                {player_logo}
                                {edit_image_text}
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