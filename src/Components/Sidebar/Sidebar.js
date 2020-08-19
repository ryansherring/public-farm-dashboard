import React from "react";
import { Navbar, Container, Card, Row, Col } from "react-bootstrap";
import ToDoList from "../ToDo/ToDoList";
import Mister from "../PlugStates/Mister/MisterButton";
import Fan from "../PlugStates/Fan/FanButton";
import WaterPump from "../PlugStates/WaterPump/WaterPumpButton";
import "./Sidebar.css";

function Sidebar() {
  // var and function to get percentage of screen scrolled
  var result = 0;
  var scrollPercent = () => {
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    result = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    console.log(result);
  };

  // scroll effects function
  var expand = "";
  window.addEventListener("scroll", () => {
    scrollPercent();
    const nav = document.getElementById("nav");
    const button = document.querySelector(".navbar-toggler");
    // if (result > 10) {
    //   nav.classList.add('scrolled')
    // } else {
    //   nav.classList.remove('scrolled')
    // }
    if (result > 95) {
      nav.classList.remove("notBottom");
      nav.classList.add("bottom");
      document.getElementById("basic-navbar-nav").className =
        "navbar-collapse collapse show";
      button.classList.add("hide");
    } else {
      nav.classList.remove("bottom");
      nav.classList.add("notBottom");
      expand = "auto";
      document.getElementById("basic-navbar-nav").className =
        "navbar-collapse collapse collapse";
      button.classList.remove("hide");
    }
  });

  return (
    <Navbar id="nav" fixed="bottom" bg="none" expand={expand}>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ backgroundColor: "lightblue", borderRadius: "100%" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Row>
          <ToDoList />
        </Row>
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
