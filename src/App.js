import React, {useState, useEffect} from "react";
import Climate from "./Components/Climate/Climate";
import Fan from "./Components/PlugStates/Fan/FanButton";
import Mister from "./Components/PlugStates/Mister/MisterButton";
import WaterPump from "./Components/PlugStates/WaterPump/WaterPumpButton";
import "./App.css";
import ToDoList from "./Components/ToDo/ToDoList";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {

  var ch = window.innerHeight
  var sh = document.documentElement.scrollHeight
  const [scrollHeight, setScrollHeight] = useState(sh)
  const [clientHeight, setClientHeight] = useState(ch)

  const handleResize = () => {
    setScrollHeight(document.documentElement.scrollHeight)
    setClientHeight(window.innerHeight)
  }
  useEffect(function(){
    window.addEventListener('resize', handleResize())
    return () => {
      window.removeEventListener('resize', handleResize())
    }
 }, []);

  useEffect(() => {
    Aos.init({})
    }, []);
    // AOS animation docs: https://michalsnik.github.io/aos/
    // AOS animation video howto example: https://www.youtube.com/watch?v=JcHLxzrsRS4
  return (
      <>
      {sh > ch ? (
        <Container fluid style={{ height: `${sh}`, position: "absolute", zIndex: "1" }} className="app-container" >
        <Row >
          <Climate />
        </Row>
        <Sidebar />
        </Container>
      ) : (
        <>
        <Container fluid style={{ height: '100vh', position: "absolute", zIndex: "1" }} className="app-container" >
        <Row data-aos="fade-right">
          <Climate/>
        </Row>
          <Row style={{ width: "80%", marginLeft: "10%" }} data-aos="fade-left">
            <ToDoList data-aos="fade-right"/>
          </Row>
          <Row style={{ height: "5%", width: "54%", marginLeft: "23%", backgroundColor: "rgba(255, 255, 255, 0.6)"}} data-aos="fade-up">
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
          </Container>
        </>
      )}</>
    
  );
}

export default App;
