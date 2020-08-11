import React, { useState, useEffect } from "react";
import { Container, Row, Col, } from "reactstrap";
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
    const [dublicate, setDublicate] = useState(false)
    const [usersData, setUsersData] = useState([]);

    // const [userCount, setUserCount]=useState({

    // })
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setDublicate(true);
        setShow(true)
    };
    const handleAdd = () => {
        setDublicate(false);
        saveToList();
        setShow(false);
    };
    const handleDelete = () => {
        setDublicate(true);
        setShow(false);
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const handleFormSubmit = event => {
        event.preventDefault();


        if (Array.isArray(usersData)) {

            for (var i = 0; i < usersData.length; i++) {
                if (usersData[i].firstName === firstName && usersData[i].lastName === lastName) {
                    // setDublicate(true);
                    // saveToList();
                    handleShow();

                }

            }
            setDublicate(false);
            saveToList();

        }
        console.log(usersData)
        // setCurrentUser({
        //     firstName: "",
        //     lastName: ""
        // })
    }
    const saveToList = () => {
        if (dublicate === false) {
            setUsersData([...usersData,
            {
                firstName: firstName,
                lastName: lastName,
                isDublicate: false
            }
            ]);
        } else { return }

    }
    // const saveToList = () => {
    //     if (setUsersData.isDublicate === false) {
    //         setUsersData([...usersData,
    //         {
    //             firstName: firstName,
    //             lastName: lastName,
    //             isDublicate: false
    //         }
    //         ]);
    //     } else { return }

    // }
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

                    <Modal show={show} >
                        <Modal.Header closeButton>
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
                </FormGroup>
            </Wrapper>
            <div>
                {usersData.length ? (
                    <ul style={{ listStyle: "none" }}>
                        {usersData.map(user => (
                            <EntryList
                                key={usersData.indexOf(user)}
                                firstName={user.firstName}
                                lastName={user.lastName}
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