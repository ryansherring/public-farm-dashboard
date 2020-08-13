import React from "react";
import Climate from "./Components/Climate/Climate";
import Fan from "./Components/PlugStates/Fan/FanButton";
import Mister from "./Components/PlugStates/Mister/MisterButton";
import "./App.css";
import ToDoList from "./Components/ToDo/ToDoList";
import { Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Components/Sidebar/Sidebar'


function App() {
  return (
    <Container fluid>
      
      {/* <Jumbotron className="App-header" style={{backgroundColor:"black", height: "2vh", margin: "0", color: "white", alignItems: "center", justifyContent: "center"}}>
        My cool app. Check back later for more sensors
      </Jumbotron> */}
      
      <Container fluid style={{position: "relative", zIndex: "10"}}>
      <Sidebar style={{ position: "sticky", zIndex: "10", transform: "translateZ(10)" }}/>
      <Row>
        {/* <Col sm={1} md={2} lg={9} className="col-1"> */}
        
          <Climate/>
        {/* </Col> */}
        {/* <Col sm={1} md={2} lg={2} className="col-2"> */}
          {/* <Row style={{ height: "75vh" }}> */}
            {/* <ToDoList  /> */}
          {/* </Row> */}
          {/* <Row style={{ height: "10vh", marginTop: "5vh" }}> */}
            {/* <Card
              style={{
                // height: "100%",
                width: "100%",
                // padding: "0",
                // margin: "0",
              }}
            >
              <Row>
                <Col>
                  <Fan />
                </Col>
                <Col>
                  <Mister />
                </Col>
              </Row>
            </Card> */}
          {/* </Row> */}
        {/* </Col> */}
        </Row>
    </Container>
    </Container>
  );
}

export default App;
