import React from 'react';
import { Container, Row, Col, } from "reactstrap";
// import Wrapper from "./components/Wrapper";


import FormBar from "./components/FormBar";
import EntryList from "./components/EntryList";

function App() {
  return (
    <Container>
      <div className="newBaner">
        <br></br>

        <FormBar />


      </div>


      {/* <EntryList /> */}
    </Container>
  );
}

export default App;
