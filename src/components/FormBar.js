import React, { useState } from "react";
import { Container, Row, Col, } from "reactstrap";
import { FormGroup, Label, Input, Button } from "reactstrap";
import Wrapper from "./Wrapper";


import EntryList from "./EntryList";


const FormBar = () => {

    const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: ""
    });

    const { firstName, lastName } = currentUser;

    const [usersData, setUsersData] = useState([
        //     {
        //     id: "",
        //     firstName: "",
        //     lastName: ""
        // }
    ]);
    // const [userCount, setUserCount]=useState({

    // })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        alert(`Hello ${firstName}  ${lastName}`);
        // setUsersData([{
        //     ...usersData,
        //     id: usersData.length,
        //     firstName: firstName,
        //     lastName: lastName
        // }])
        usersData.push(currentUser);
        console.log(usersData)
        setCurrentUser({
            firstName: "",
            lastName: ""
        })
    };

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