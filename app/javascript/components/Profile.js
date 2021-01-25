import React from "react";
import sg_logo from '/app/assets/images/sg_logo.png';
import { Image, Row, Container, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/app/assets/stylesheets/theme.scss';
import '/app/assets/stylesheets/base.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            image: sg_logo,
            name: 'PlayerName',

        }
    }

    render() {
        return(
            <div className={'profile'}>
                <Container>
                    {/* Header: Profile image, player name, edit button*/}
                    <Row>
                        <Col>
                            <div className={'profile_picture_and_name'}>
                                <Image className={'profile_picture'} src={sg_logo} rounded/>
                                <h3 className={'profile_name'}>{this.state.name}</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className={'profile_edit'}>
                                <Button variant={'primary'}>Edit</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className={'profile_rank'}>
                            Player Rank:
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Profile;