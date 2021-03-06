import React from "react";
import { Pie } from "react-chartjs-2";
import LineChart from "./chart";
import ReactSpeedometer from "react-d3-speedometer";
import { Container, Row, Card, CardGroup } from "react-bootstrap";
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
        {
          id: 2,
          type: "line",
          label: "Water Temperature",
          backgroundColor: "rgba(0, 0, 0, 0)",
          pointBorderColor: "rgba(128,0,128,0)",
          pointHoverBorderColor: "rgba(235,06,250,1)",
          borderColor: "rgba(128,0,128,1)",
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
              maxTicksLimit: 5,
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


    // let logObj
    // let outsideLogObj
    // fetch(
    //   "https://sherringiscaring.webthings.io/logs/things/http---192.168.1.100-things-DHTSensor/properties/temperature",
    //   {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       authorization:
    //         "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg",
    //     },
    //   }
    // )
    // .then((res) => res.json())
    // .then((res) => logObj = res)
    // .then((logObj) => {
    //   console.log(logObj);
    //   logObj.forEach(Object => {
    //     this.state.lineChartData.datasets[0].data.push(Object.value)
    //     // this.state.lineChartData.datasets[0].data.shift()
    //     this.state.lineChartData.labels.push(new Date(Object.date).toLocaleTimeString([], { weekday: "short", hour: '2-digit', minute: '2-digit' }))
    //     // this.state.lineChartData.labels.shift()
    //   })
    // })
    

    
    // fetch(
    //   "https://sherringiscaring.webthings.io/logs/things/weather-7122537431f4dc3d166c957717ee2b498815d683/properties/temperature",
    //   {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       authorization:
    //         "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg",
    //     },
    //   }
    // )
    // .then((res) => res.json())
    // .then((res) => {
    //   outsideLogObj = res;
    //   console.log(outsideLogObj)
    //   outsideLogObj.forEach(Object => {
    //     this.state.lineChartData.datasets[1].data.push(Object.value)
    //     // this.state.lineChartData.datasets[1].data.shift()
    //     this.state.lineChartData.labels.push(new Date(Object.date).toLocaleTimeString([], { weekday: "short", hour: '2-digit', minute: '2-digit' }))
    //     // this.state.lineChartData.labels.shift()
    //     // console.log(this.state.lineChartData.datasets[1].data)
    //   })
    // })




      // const oldTempDataSet = this.state.lineChartData.datasets[0];
      // const newTempDataSet = { ...oldTempDataSet };
      // const oldTemp2DataSet = this.state.lineChartData.datasets[1];
      // const newTemp2DataSet = { ...oldTemp2DataSet };

      // const newChart1Data = {
      //   ...this.state.lineChartData.datasets,
      //   datasets: [newTempDataSet, newTemp2DataSet],
      //   ...this.state.lineChartData.datasets[1],
      //   datasets: [newTempDataSet, newTemp2DataSet],

      //   labels: this.state.lineChartData.labels.concat(
      //     new Date().toLocaleTimeString([], { weekday: "short", hour: '2-digit', minute: '2-digit' })
      //   ),
      // };
      // console.log(newChart1Data)
      // this.setState({ lineChartData: newChart1Data })

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    this.ws = new WebSocket(
      "wss://sherringiscaring.webthings.io/things/http---192.168.1.100-things-DHTSensor?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRhMTJiNWY5LWVlNTAtNGFkMi1hNzNlLTg5ODVjODRhNTU3ZiJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU5MTczNDAzMCwiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.UGVluprHnYwU1IW8HGHi5KzIdAy0tPm6BwIaCFJmcuWfP2bO7LUpYmuDZzLTKaepW8ZO5N80EiIzzTfeqB7Xsg",
      "webthing"
    );

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    this.ws.onopen = () => {
      console.log("Connection Opened! (Inside Temp)");
      this.ws.send(JSON.stringify(indoorSubscription));
      

      // get a single point of data to correspond with first onMessage. NOTE: May not be needed after logs
      let obj;
      fetch(
        "https://sherringiscaring.webthings.io/things/weather-7122537431f4dc3d166c957717ee2b498815d683/properties",
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
          "https://sherringiscaring.webthings.io/things/weather-7122537431f4dc3d166c957717ee2b498815d683/properties",
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
          // console.log(this.state.weatherImg)
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
            new Date().toLocaleTimeString([], { weekday: "short", hour: '2-digit', minute: '2-digit' })
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
      <Container className={'something'} style={{position: 'relative', zIndex: '1'}}>
          <Row style={{ height: '36vh', zIndex: "1", backgroundColor: 'rgba(255,255,255, 0.5)',  }}>
            <LineChart
              className="line chart"
              data={this.state.lineChartData}
              options={this.state.lineChartOptions}
            />
          </Row>
          <CardGroup style={{marginTop: "1%"}}>
            <Card style = {{ fontSize: "calc(50% + 2vmin)", backgroundColor: 'rgba(255,255,255, 0.4)'}} data-aos="fade-up" >
              <Card.Title>Current Indoor Temperature</Card.Title>
              <Card.Body style={{ padding: "0", textAlign: "center", }}>
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
            <Card style = {{ fontSize: "calc(50% + 2vmin)", backgroundColor: 'rgba(255,255,255, 0.4)'}} data-aos="fade-up">
              <Card.Title>Current Indoor Humidity</Card.Title>
              <Card.Body style={{ padding: "0", textAlign: "center"}}>
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
            <Card style = {{ fontSize: "calc(50% + 2vmin)", backgroundColor: 'rgba(255,255,255, 0.4)' }} data-aos="fade-up">
              Cloud Cover: {this.state.cloudCover}%
              <Pie 
              // height={100}
              // width={100}
              // maintainAspectRatio={false}
              data={this.state.pieData}
              style ={{ backgroundColor: 'rgba(255,255,255, 0.4)'}}
              />
            </Card>
            <Card className={"box4"} style = {{ position: 'relative', fontSize: "calc(50% + 1vmin)", backgroundColor: 'rgba(255,255,255, 0.4)', zIndex: "12" }} data-aos="fade-up" >
             <br />weather images being changed at the moment
             <br />wind speed: {this.state.windSpeed} mph
             <br />weather: {this.state.weather}
            </Card>
            {/* <ToDoList style={{display: "hidden"}}/> */}
          </CardGroup>
      </Container>
    );
  }
}

export default Climate;
