import React from "react";
import Climate from "./Components/Climate/Climate";
import Fan from "./Components/PlugStates/Fan/FanButton";
import Mister from "./Components/PlugStates/Mister/MisterButton";
import "./App.css";
import ToDoList from "./Components/ToDo/ToDoList";
import { Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Container fluid>
      <Jumbotron className="App-header" style={{backgroundColor:"black", height: "1vh", margin: "0"}}>
        Undergoing maintenance for adding sensors and responsiveness on different screen sizes. May seem strange on a smaller screen or completely broken on a phone.
        Enjoy some climate data in the meantime...
      </Jumbotron>
      <Container fluid>
        <Col sm={1} md={2} lg={9} className="col-1">
          <Climate />
        </Col>
        <Col sm={1} md={2} lg={2} className="col-2">
          {/* <Row style={{ height: "75vh" }}> */}
            <ToDoList  />
          {/* </Row> */}
          {/* <Row style={{ height: "10vh", marginTop: "5vh" }}> */}
            <Card
              // style={{
              //   height: "100%",
              //   width: "100%",
              //   padding: "0",
              //   margin: "0",
              // }}
            >
              {/* <Row> */}
                <Col>
                  <Fan />
                </Col>
                <Col>
                  <Mister />
                </Col>
              {/* </Row> */}
            </Card>
          {/* </Row> */}
        </Col>
    </Container>
    </Container>
  );
}

export default App;
