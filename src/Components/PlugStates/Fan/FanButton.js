import React, { Component } from "react";
import './fanLight.css'
import {Container} from 'react-bootstrap'




class Fan extends Component {
  state = { fan: "", buttonColor: '' };
  componentDidMount() {
    const fanSubscription = {
      "messageType": "propertyStatus",
      "data": {
        //"on": true,
        "on": true
      },
    };

    this.ws3 = new WebSocket(
      "wss://sherringiscaring.mozilla-iot.org/things/tplink-8006FCBECD4C4C98FFDE442CEED8F07019989CAB?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg",
      "webthing"
    );

    this.ws3.onopen = () => {
      console.log("Connection Opened! (Fan)");
      this.ws3.send(JSON.stringify(fanSubscription));
    };

    this.ws3.onmessage = (e) => {
      const value = JSON.parse(e.data);
      if (value.data.on == true) {
        this.setState({ fan: "on", buttonColor: "led-green" });
      }
      else if (value.data.on == false){
        this.setState({ fan: "off", buttonColor: "led-red" });
      }
    };
  }

    render(){
        return(
          <Container style={{alignText: "center"}}>
            <div class={this.state.buttonColor}></div>
            <p>Fan: {this.state.fan}</p>
          </Container>
        )
    }
}
export default Fan;