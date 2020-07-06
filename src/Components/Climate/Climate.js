import React from "react";
import { Pie } from "react-chartjs-2";
import LineChart from "./chart";
import ReactSpeedometer from "react-d3-speedometer";
import { Container, Col, Row, Card } from "react-bootstrap";
import './Climate.css'

class Climate extends React.Component {
  state = {
    weather: "",
    cloudCover: 0,
    windSpeed: 0,
    gauge: {},
    gaugeHumidity: {},
    fan: {},
    lineChartData: {
      labels: [],
      datasets: [
        {
          id: 0,
          type: "line",
          label: "Indoor Temperature",
          backgroundColor: "rgba(0, 0, 0, 0)",
          pointBorderColor: "rgba(100,200,100, 0)",
          pointHoverBorderColor: "rgba(100,200,100, 1)",
          borderColor: "rgba(135,206,250,1)",
          fill: true,
          borderWidth: "2",
          lineTension: 1,
          data: [],
          showLine: true,
          spanGaps: true,
          showPoint: false,
        },
        {
          id: 1,
          type: "line",
          label: "Outdoor Temperature",
          backgroundColor: "rgba(0, 0, 0, 0)",
          pointBorderColor: "rgba(135,206,250,0)",
          pointHoverBorderColor: "rgba(135,206,250,1)",
          borderColor: "rgba(100,200,100, 1)",
          fill: true,
          borderWidth: "2",
          lineTension: 1,
          data: [],
          showLine: true,
          spanGaps: true,
          showPoint: false,
        },
      ],
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      title: { text: "Temperature Charts", display: true },
      tooltips: {
        enabled: true,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              autoSkip: true,
              beginAtZero: true,
              gridLines: {
                display: false,
              },
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              gridLines: {
                display: false,
              },
            },
          },
        ],
      },
    },
    pieData: {
      labels: ["clouds", "clear sky"],
      datasets: [
        {
          data: [0, 100],
          backgroundColor: ["#D3D3D3", "#00FFFF"],
          hoverBackgroundColor: ["#A9A9A9", "#0000CD"],
        },
      ],
    },
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount() {
    const indoorSubscription = {
      messageType: "propertyStatus",
      data: {
        temperature: Number,
      },
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    this.ws = new WebSocket(
      "wss://sherringiscaring.mozilla-iot.org/things/http---192.168.1.100-things-DHTSensor?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg",
      "webthing"
    );

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    this.ws.onopen = () => {
      console.log("Connection Opened! (Inside Temp)");
      this.ws.send(JSON.stringify(indoorSubscription));
      let obj;
      fetch(
        "https://sherringiscaring.mozilla-iot.org/things/http---192.168.1.100-things-DHTSensor/properties",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            authorization:
              "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          obj = res;
          console.log(res)
          outsideData();
          this.setState({
            weather: `${res.description}`,
            windSpeed: res.windSpeed,
            cloudCover: res.cloudCover,
            
          });
        })
        .catch((err) => console.log(err));
      function outsideData() {
        oldTemp2DataSet.data.push(obj.temperature);
      }
      const oldTemp2DataSet = this.state.lineChartData.datasets[1];
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    this.ws.onmessage = (e) => {
      const value = JSON.parse(e.data);

      const oldTempDataSet = this.state.lineChartData.datasets[0];
      const newTempDataSet = { ...oldTempDataSet };

      if (value.data.temperature) {
        // console.log(value.data);
        var obj;
        fetch(
          "https://sherringiscaring.mozilla-iot.org/things/weather-7122537431f4dc3d166c957717ee2b498815d683/properties",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              authorization:
                "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg",
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            obj = res;
            outsideData();
            this.setState({
              weather: `${res.description}`,
              windSpeed: res.windSpeed,
              cloudCover: res.cloudCover,
              pieData: newPieChartData,
            });
          })
          .catch((err) => console.log(err));

        const oldTemp2DataSet = this.state.lineChartData.datasets[1];
        const PieDataSet1 = this.state.pieData.datasets[0];

        function outsideData() {
          oldTemp2DataSet.data.push(obj.temperature);
          PieDataSet1.data.splice(0, 1, obj.cloudCover);
          PieDataSet1.data.splice(1, 1, 100 - obj.cloudCover);
          console.log(this.state.weatherImg)
        }

        const newTemp2DataSet = { ...oldTemp2DataSet };
        newTempDataSet.data.push(value.data.temperature);
        const newPieData = { ...PieDataSet1 };

        const newChart1Data = {
          ...this.state.lineChartData.datasets,
          datasets: [newTempDataSet, newTemp2DataSet],
          ...this.state.lineChartData.datasets[1],
          datasets: [newTempDataSet, newTemp2DataSet],

          labels: this.state.lineChartData.labels.concat(
            new Date().toLocaleTimeString()
          ),
        };
        const newPieChartData = {
          ...this.state.pieData.datasets,
          datasets: [newPieData],
        };

        const gaugeVal = value.data.temperature;
        // console.log([this.state.lineChartData.datasets[0].data, this.state.lineChartData.datasets[1].data])
        this.setState({ lineChartData: newChart1Data, gauge: gaugeVal });
        console.log(this.state);
      }
      if (value.data.humidity) {
        const gaugeHumidityVal = value.data.humidity;
        this.setState({ gaugeHumidity: gaugeHumidityVal });
      }
    };
  }
  // MAX_TEMP_READINGS = 4610
  //////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <Container style={{height: "50vh"}} className={'something'}>
          <Row style={{height:"70%"}}>
            <LineChart
              className="line chart"
              data={this.state.lineChartData}
              options={this.state.lineChartOptions}
            />
          </Row>
          <Row style={{height:"40%", marginBottom: '5%'}}>
            <Col>
            <Card style = {{margin: "0", padding: "0", textAlign: "center"}}>
              <Card.Title>Current Indoor Temperature</Card.Title>
              <Card.Body style={{margin: "0", padding: "0", textAlign: "center"}}>
              <ReactSpeedometer
                forceRender = {true}
                fluidWidth={false}
                minValue={10}
                maxValue={30}
                startColor="red"
                endColor="green"
                segments={5}
                value={this.state.gauge}
                needleColor="purple"
                height={150}
                width={175}
              />
              </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style = {{margin: "0", padding: "0", textAlign: "center"}}>
              <Card.Title>Current Indoor Humidity</Card.Title>
              <Card.Body style={{margin: "0", padding: "0", textAlign: "center"}}>
              <ReactSpeedometer
                forceRender = {true}
                fluidWidth={false}
                minValue={0}
                maxValue={60}
                startColor="red"
                endColor="green"
                segments={3}
                value={this.state.gaugeHumidity}
                needleColor="purple"
                height={150}
                width={175}
              />
              </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{height: "40%"}}>
            <Container>
              <Row style={{height: "2%", marginTop: "2%"}}>
                <Col style={{height: "100%"}}>
                  <Card>
                    Cloud Cover: {this.state.cloudCover}%
                    <Pie 
                    // height={100}
                    // width={100}
                    // maintainAspectRatio={false}
                    data={this.state.pieData}
                    />
                  </Card>
                </Col>
                <Col style={{height: "100%"}}>
                <Card className={"box4"}>
                 <br />weather images being changed at the moment
                 <br />wind speed: {this.state.windSpeed} mph
                 <br />weather: {this.state.weather}
                </Card>
                </Col>
              </Row>
            </Container>
          </Row>
      </Container>
    );
  }
}

export default Climate;
