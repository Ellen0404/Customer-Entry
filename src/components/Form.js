import React, { useState } from "react";
import { Container, Row, Col, } from "reactstrap";
import { FormGroup, Label, Input, Button } from "reactstrap";


const Form = () => {

    const [state, setState] = useState({
        firstName: "",
        lastName: ""
    });

    const { firstName, lastName } = state;

    return (
        <Form>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                    value={firstName}
                    name="firstName"
                    type="text"
                    id="firstName"
                    placeholder="Enter your First Name"
                />
                <Label for="lastName">Last Name</Label>
                <Input
                    value={lastName}
                    name="lastName"
                    type="text"
                    id="lastName"
                    placeholder="Enter your Last Name"
                />
                <Button>Submit</Button>
            </FormGroup>
        </Form>
    )
}

export default Form;