import React, { Component } from "react";
import {Container} from 'react-bootstrap'



class Mister extends Component {
  state = { Mister: "", buttonColor: "" };
  componentDidMount() {
    const MisterSubscription = {
      "messageType": "propertyStatus",
      "data": {
        "on": true,
      },
    };

    this.ws = new WebSocket(
      "ws://192.168.1.113/things/tplink-8006289E78CEF13619AF8FDE7F8FE2B31B28BAFA?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg",
      "webthing"
    );

    this.ws.onopen = () => {
      console.log("Connection Opened! (Mister)");
      this.ws.send(JSON.stringify(MisterSubscription));
    };

    this.ws.onmessage = (e) => {
      const value = JSON.parse(e.data);
      if (value.data.on == true) {
        this.setState({ Mister: "on", buttonColor: "led-green" });
      }
      else if (value.data.on == false){
        this.setState({ Mister: "off", buttonColor: "led-red" });
      }
    };
  }

    render(){
        return(
          <Container style={{alignItems:"center", alignText: "center"}}>
            <div class={this.state.buttonColor}></div>
            <p>Mister: {this.state.Mister}</p>
          </Container>
        )
    }
}
export default Mister;