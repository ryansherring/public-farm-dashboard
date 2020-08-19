import React, { Component } from "react";
import {Container} from 'react-bootstrap'



class Mister extends Component {
  state = { Mister: "off", buttonColor: "led-red" };
  componentDidMount() {
    const MisterSubscription = {
      "messageType": "propertyStatus",
      "data": {
        "on": true,
      },
    };

    this.ws = new WebSocket(
      "wss://sherringiscaring.mozilla-iot.org/things/tplink-8006289E78CEF13619AF8FDE7F8FE2B31B28BAFA?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRhMTJiNWY5LWVlNTAtNGFkMi1hNzNlLTg5ODVjODRhNTU3ZiJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU5MTczNDAzMCwiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.UGVluprHnYwU1IW8HGHi5KzIdAy0tPm6BwIaCFJmcuWfP2bO7LUpYmuDZzLTKaepW8ZO5N80EiIzzTfeqB7Xsg",
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
            <br />
            <p>Mister: {this.state.Mister}</p>
          </Container>
        )
    }
}
export default Mister;