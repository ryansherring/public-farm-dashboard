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
      "wss://sherringiscaring.mozilla-iot.org/things/tplink-8006FCBECD4C4C98FFDE442CEED8F07019989CAB?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRhMTJiNWY5LWVlNTAtNGFkMi1hNzNlLTg5ODVjODRhNTU3ZiJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU5MTczNDAzMCwiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.UGVluprHnYwU1IW8HGHi5KzIdAy0tPm6BwIaCFJmcuWfP2bO7LUpYmuDZzLTKaepW8ZO5N80EiIzzTfeqB7Xsg",
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