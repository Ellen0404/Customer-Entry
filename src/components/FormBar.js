import React, { useState } from "react";
import { Container, Row, Col, } from "reactstrap";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";


const FormBar = () => {

    const [state, setState] = useState({
        firstName: "",
        lastName: ""
    });

    const { firstName, lastName } = state;

    const handleInputChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        alert(`Hello ${firstName}  ${lastName}`);

        setState({
            firstName: "",
            lastName: ""
        })
    };

    return (
        <>

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
        </>
    )
}

export default FormBar;