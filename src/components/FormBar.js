import React, { useState, useEffect } from "react";
// import { Container, Row, Col, } from "reactstrap";
import { FormGroup, Label, Input, Button } from "reactstrap";
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

        if (Array.isArray(usersData)) {

            for (var i = 0; i < usersData.length; i++) {
                if (usersData.find(user => user.firstName === firstName && user.lastName)) {
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
            isDublicate: false
        }
        ]);
        // setUsersData([{ ...currentUser }])
        setCurrentUser({
            firstName: "",
            lastName: ""
        })


    }

    const deleteUser = firstName => {
        const deleteArray = usersData.filter(user => user.firstName !== firstName);
        // console.log("deleted array: ")
        // console.log(deleteArray)
        setUsersData(deleteArray);
        // console.log("users data array: ")
        // console.log(usersData)

    }

    return (
        <>
            <Wrapper className="mt-n1">
                <FormGroup style={{ width: 350 }}>
                    <Label for="firstName">First Name</Label>
                    <Input
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        type="text"
                        id="firstName"
                        placeholder="Enter your First Name"
                    />
                    <Label for="lastName">Last Name</Label>
                    <Input
                        value={lastName}
                        name="lastName"
                        onChange={handleInputChange}
                        type="text"
                        id="lastName"
                        placeholder="Enter your Last Name"
                    />
                    <Button onClick={handleFormSubmit}>Submit</Button>


                </FormGroup>
                <Modal show={show} >
                    <Modal.Header >
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>You already have {firstName} {lastName} in the list, would you like to add it again?</h3>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="ui inverted green button" onClick={handleAdd}>
                            Add
                             </Button>
                        <Button className="ui inverted red button" onClick={handleDelete}>
                            Delete
                             </Button>
                    </Modal.Footer>
                </Modal>
            </Wrapper>
            <div>
                {usersData.length ? (
                    <ul style={{ listStyle: "none" }}>
                        {usersData.map(user => (
                            <EntryList
                                key={usersData.indexOf(user)}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                id={usersData.indexOf(user)}
                                deleteUser={deleteUser}

                            />
                        ))}
                    </ul>
                ) : (
                        null
                    )}
            </div>
        </>
    )
}

export default FormBar;