import React from "react";
import { Navbar, Container, Card, Row, Col } from "react-bootstrap";
import ToDoList from "../ToDo/ToDoList";
import Mister from "../PlugStates/Mister/MisterButton";
import Fan from "../PlugStates/Fan/FanButton";
import WaterPump from "../PlugStates/WaterPump/WaterPumpButton";

function Sidebar() {
  return (
    // <Container style = {{ position: "-webkit-sticky", position: "sticky", height: "100%", float: "right", margin: "0", padding: "0", zIndex: "10", alignItems: "center" }}>
      <Col style={{ position: "fixxed", zIndex: "1" }}>
        <Navbar bg="light" expand="auto" style={{ position: "-webkit-sticky", position: "relative", float: "right", margin: "0", padding: "0", zIndex: "10" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Row>
              <ToDoList />
            </Row>
            <Row>
              <Card>
                  <Row>
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
              </Card>
            </Row>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    // </Container>
  );
}

export default Sidebar;
