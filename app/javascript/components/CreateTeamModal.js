import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-bootstrap/SelectableContext';

function CreateTeamModal(props) {

    const [errorMessage, setErrorMessage] = React.useState("");
    const [teammates, setTeammates] = React.useState([]);

    function createSelectedItems() {
        let items = [];
        props.player_list.forEach(player => items.push(<option key={player} value={player}>{player}</option>))
        return items;
    }

    // TODO: force captain to be populated
    // TODO: force team name to be populated and if it's valid (unique)
    // TODO: use error message to relay to user if entries are bad
    function handleSubmit(e) {
        e.preventDefault();

        let teamList = []
        teammates.forEach(teammate => teamList.push(window[teammate.key].value))

        let token = $('meta[name=csrf-token]').attr('content');
        let body = JSON.stringify({authenticity_token: token, team_name: teamName.value, captain: captainName.value, teamList: teamList})
        fetch(props.create_team_path, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html, application/json, application/xhtml+xml, application/xml',
                'X-CSRF-Token': token
            },
            body: body,
        }).then((response) => {
            if (response.ok) {
                setTeammates([])
                window.location.href = response.url
            }
        })
    }

    function handleAddPlayer() {
        let tempList = []
        teammates.forEach(teammate => tempList.push(teammate))
        tempList.push(
            <Form.Group key={"player" + (teammates.length + 1)} controlId={"player" + (teammates.length + 1)}>
                <Form.Label>Player {teammates.length + 1}</Form.Label>
                <Form.Control as={"select"}>
                    <option>Select Player</option>
                    {createSelectedItems()}
                </Form.Control>
            </Form.Group>)

        setTeammates(tempList)
    }

    function handleClose () {
        props.onHide()
        setTeammates([])
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => handleClose()}
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
                    <Form.Group controlId={"captainName"}>
                        <Form.Label>Captain</Form.Label>
                        <Form.Control as={"select"}>
                            <option>Select Captain</option>
                            {createSelectedItems()}
                        </Form.Control>
                    </Form.Group>
                    {teammates}
                    <Button type="button" onClick={() => {handleAddPlayer()}}>Add Player</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"primary"} type={"submit"}>Create</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default CreateTeamModal;