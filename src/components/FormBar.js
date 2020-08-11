import React, { useState } from "react";
import { FormGroup, Label, Input, Button, Jumbotron } from "reactstrap";
import Modal from 'react-bootstrap/Modal';

import Wrapper from "./Wrapper";
import EntryList from "./EntryList";


const FormBar = () => {

    const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: ""
    });

    const { firstName, lastName } = currentUser;
    const [usersData, setUsersData] = useState([]);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleAdd = () => {
        saveToList();
        setShow(false);
    };
    const handleDelete = () => {
        setShow(false);
        setCurrentUser({
            firstName: "",
            lastName: ""
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (!firstName || !lastName) {
            setCurrentUser({
                firstName: "",
                lastName: ""
            })
            return alert("Fill out your First and Last name please!");
        }

        if (Array.isArray(usersData)) {

            for (var i = 0; i < usersData.length; i++) {
                if (usersData.find(user => user.firstName === firstName && user.lastName === lastName)) {
                    return handleShow();
                }
            }
            saveToList();
        }
        // console.log(usersData)

    };


    const saveToList = () => {

        setUsersData([...usersData,
        {
            firstName: firstName,
            lastName: lastName,
            id: usersData.length
        }
        ]);

        setCurrentUser({
            firstName: "",
            lastName: ""
        })
    };

    const deleteUser = id => {
        // console.log(id)
        const deleteArray = usersData.filter(user => user.id !== id);
        setUsersData(deleteArray);
    }

    return (
        <>
            <Wrapper className="mt-n1">
                <h1>Customer entry</h1>
                <FormGroup style={{ width: 350 }}>
                    <Label hidden for="firstName">First Name</Label>
                    <Input style={{ padding: 10, margin: 5 }}
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        type="text"
                        id="firstName"
                        placeholder="Enter First Name..."
                    />
                    <Label hidden for="lastName">Last Name</Label>
                    <Input style={{ padding: 10, margin: 5 }}
                        value={lastName}
                        name="lastName"
                        onChange={handleInputChange}
                        type="text"
                        id="lastName"
                        placeholder="Enter Last Name..."
                    />
                    <Button style={{ padding: 10, margin: 5 }}
                        className="ui green button"
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </Button>
                </FormGroup>
                <Modal show={show} >
                    <Modal.Header >
                        <Modal.Title><i style={{ width: 40 }} className="exclamation triangle icon"></i></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>
                            You already have {firstName} {lastName} in the list, would you like to add it again?
                        </h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="ui inverted green button" onClick={handleAdd}>
                            Add
                             </Button>
                        <Button className="ui inverted orange button" onClick={handleDelete}>
                            Delete
                             </Button>
                    </Modal.Footer>
                </Modal>
            </Wrapper>
            <Jumbotron className="mt-n1">
                <h2>New Customers</h2>
                <hr></hr>
                {usersData.length ? (

                    <div className="ui middle aligned divided list">
                        {usersData.map(user => (
                            <EntryList
                                key={usersData.indexOf(user)}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                id={usersData.indexOf(user)}
                                deleteUser={deleteUser}

                            />
                        ))}
                    </div>
                ) : (
                        null
                    )}

            </Jumbotron>
        </>
    )
}

export default FormBar;