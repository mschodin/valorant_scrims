import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-bootstrap/SelectableContext';

function CreateTeamModal(props) {

    const [errorMessage, setErrorMessage] = React.useState("");
    const [playerList, setPlayerList] = React.useState([]);
    console.log(playerList)

    function createSelectedItems() {
        let items = [];
        props.player_list.forEach(player => items.push(<option key={player} value={player}>{player}</option>))
        return items;
    }

    // TODO: check path of handleSubmit
    function handleSubmit(e) {
        e.preventDefault();
        console.log("in here")
        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, profile_id: 1, team_name: teamName.value})
        fetch(props.create_team_path, {
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

    // function addPlayer() {
    //     return (
    //         <Form.Group controlId={"player1"}>
    //             <Form.Label>Player 1</Form.Label>
    //             <Form.Control as={"select"}>
    //                 <option>Select Player</option>
    //                 {createSelectedItems()}
    //             </Form.Control>
    //         </Form.Group>
    //     );
    // }
    function handleAddPlayer() {
        // setPlayerList([])
        console.log("when is this happeneing? ")
    }

    // TODO: Create function to check if team name is valid

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Team
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId={"teamName"}>
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control type={"text"} placeholder={"Enter Team Name"} />
                    </Form.Group>
                    <Form.Group controlId={"captain"}>
                        <Form.Label>Captain</Form.Label>
                        <Form.Control as={"select"}>
                            <option>Select Captain</option>
                            {createSelectedItems()}
                        </Form.Control>
                    </Form.Group>
                    {/*<Form.Group controlId={"player1"}>*/}
                    {/*    <Form.Label>Player 1</Form.Label>*/}
                    {/*    <Form.Control as={"select"}>*/}
                    {/*        <option>Select Player</option>*/}
                    {/*        {createSelectedItems()}*/}
                    {/*    </Form.Control>*/}
                    {/*</Form.Group>*/}
                    {playerList}
                    <Button type="button" onClick={handleAddPlayer()}>+</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"primary"} type={"submit"}>Create</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default CreateTeamModal;