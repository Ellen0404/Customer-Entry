import React from 'react';
import { Container, Row, Col, } from "reactstrap";
import Wrapper from "./components/Wrapper";


import FormBar from "./components/FormBar";
import EntryList from "./components/EntryList";

function App() {
  return (
    <Container>
      <div className="newBaner">
        <br></br>
        <Wrapper className="mt-n1">
          <FormBar />
        </Wrapper>

      </div>


      <EntryList />
    </Container>
  );
}

export default App;
