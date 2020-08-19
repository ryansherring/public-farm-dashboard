import React from "react";
import Climate from "./Components/Climate/Climate";
import Fan from "./Components/PlugStates/Fan/FanButton";
import Mister from "./Components/PlugStates/Mister/MisterButton";
import WaterPump from "./Components/PlugStates/WaterPump/WaterPumpButton";
import "./App.css";
import ToDoList from "./Components/ToDo/ToDoList";
import { Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  var scrollHeight;
  var clientHeight;
  var measurement;
  const measureScreenSize = () => {
    scrollHeight = document.documentElement.scrollHeight;
    clientHeight = document.documentElement.clientHeight;
    measurement = scrollHeight - clientHeight;
    console.log("scrollHeight: " + scrollHeight)
    console.log("clientHeight: " + clientHeight)
    console.log("measurement: " + measurement)
  }
  measureScreenSize()
  return (
    <Container fluid style={{ position: "absolute", zIndex: "1" }}>
      <Row>
        <Climate />
      </Row>
      {measureScreenSize}
      {clientHeight < scrollHeight ? (
        <Sidebar />
      ) : (
        <>
          <Row style={{ height: "80%", width: "80%", marginLeft: "10%" }}>
            <ToDoList style={{ height: "80%" }} />
          </Row>
          <Row style={{ width: "60%", marginLeft: "20%" }}>
            <Col>
              <Fan />
            </Col>
            <Col>
              <Mister />
            </Col>
            <Col>
              <WaterPump />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default App;
