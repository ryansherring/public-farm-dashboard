import React, {useState, useEffect} from "react";
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
  var ch = window.innerHeight
  var sh = document.documentElement.scrollHeight
  console.log(sh)
  console.log(ch)
  const [scrollHeight, setScrollHeight] = useState(sh)
  const [clientHeight, setClientHeight] = useState(ch)

  const handleResize = () => {
    setScrollHeight(document.documentElement.scrollHeight)
    setClientHeight(window.innerHeight)
    console.log('scroll height = '+ scrollHeight)
    console.log('client height = '+ clientHeight)
  }
  
  useEffect(function(){
    window.addEventListener('resize', handleResize())
    return () => {
      window.removeEventListener('resize', handleResize())
    }
 }, []);

  return (
    <Container fluid style={{ height: '100vh', position: "absolute", zIndex: "1" }}>
      <Row>
        <Climate />
      </Row>
      {sh > ch ? (
        <Sidebar />
      ) : (
        <>
          <Row style={{ width: "80%", marginLeft: "10%" }}>
            <ToDoList />
          </Row>
          <Row style={{ height: "4%", width: "60%", marginLeft: "20%"}}>
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
