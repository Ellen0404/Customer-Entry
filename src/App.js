import React from 'react';
import { Container, Row, Col, } from "reactstrap";

import Form from "./components/Form";
import EntryList from "./components/EntryList";

function App() {
  return (
    <Container>
      <div className="newBaner">
        <Form />
      </div>


      <EntryList />
    </Container>
  );
}

export default App;
