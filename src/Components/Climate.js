import React from "react";
import { Pie } from 'react-chartjs-2'
import LineChart from "./chart";
import ReactSpeedometer from "react-d3-speedometer";

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
          pointBorderColor: 'rgba(100,200,100, 0)',
          pointHoverBorderColor: 'rgba(100,200,100, 1)',
          borderColor: 'rgba(135,206,250,1)',
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
          pointBorderColor: 'rgba(135,206,250,0)',
          pointHoverBorderColor: 'rgba(135,206,250,1)',
          borderColor: 'rgba(100,200,100, 1)',
          fill: true,
          borderWidth: "2",
          lineTension: 1,
          data: [],
          showLine: true,
          spanGaps: true,
          showPoint: false,
        }
      ]
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      title: {text: 'Temperature Charts', display: true},
      tooltips: {
        enabled: true
      },
      scales: {
        yAxes: [
          {
            ticks: {
              autoSkip: true,
              beginAtZero: true,
              gridLines: {
                display: false
              }
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              gridLines: {
                display: false
              }
            }
          }
        ],
      }
    },
    pieData: {
      labels: [
        'clouds',
        'clear sky'
      ],
      datasets: [{
        data: [0, 100],
        backgroundColor: [
          '#D3D3D3',
          '#00FFFF'
        ],
        hoverBackgroundColor: [
          '#A9A9A9',
          '#0000CD'
        ]
      }]
    },
  };


////////////////////////////////////////////////////////////////////////////////////////////////////


  componentDidMount() {
    const indoorSubscription = 
      {
        "messageType": "propertyStatus",
        "data": {
          "temperature": Number
        }
      }
////////////////////////////////////////////////////////////////////////////////////////////////////

    this.ws = new WebSocket('ws://192.168.1.113/things/http---192.168.1.100-things-DHTSensor?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg', 'webthing');

////////////////////////////////////////////////////////////////////////////////////////////////////
    this.ws.onopen = () => {
      console.log("Connection Opened! (Inside Temp)")
      this.ws.send(JSON.stringify(indoorSubscription));
      let obj;
      fetch('http://192.168.1.113/things/weather-7122537431f4dc3d166c957717ee2b498815d683/properties',
    {
      'method': 'GET',
      'headers': {
        'Accept': 'application/json',
        'authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg'
      }
    }
    )
    .then(res => res.json())
    .then(res => 
      {
        obj = res
        outsideData()
        this.setState({weather: `${res.description}`, windSpeed: res.windSpeed, cloudCover: res.cloudCover})
      })
    .catch((err) => console.log(err))
    function outsideData() {
      oldTemp2DataSet.data.push(obj.temperature);
    }
    const oldTemp2DataSet = this.state.lineChartData.datasets[1];
    };
////////////////////////////////////////////////////////////////////////////////////////////////////  
    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      
      const oldTempDataSet = this.state.lineChartData.datasets[0];
      const newTempDataSet = { ...oldTempDataSet };


  if (value.data.temperature) {
    // console.log(value.data);
    var obj;
    fetch('http://192.168.1.113/things/weather-7122537431f4dc3d166c957717ee2b498815d683/properties',
    {
      'method': 'GET',
      'headers': {
        'Accept': 'application/json',
        'authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg'
      }
    }
    )
    .then(res => res.json())
    .then(res => 
      {
        obj = res;
        outsideData()
        this.setState({weather: `${res.description}`, windSpeed: res.windSpeed, cloudCover: res.cloudCover, pieData: newPieChartData})
      })
    .catch((err) => console.log(err))


  const oldTemp2DataSet = this.state.lineChartData.datasets[1];
  const PieDataSet1 = this.state.pieData.datasets[0];

  function outsideData() {
    oldTemp2DataSet.data.push(obj.temperature);
    PieDataSet1.data.splice(0, 1, obj.cloudCover)
    PieDataSet1.data.splice(1, 1, 100 - obj.cloudCover)
  }

  const newTemp2DataSet = { ...oldTemp2DataSet };
  newTempDataSet.data.push(value.data.temperature);
  const newPieData = { ...PieDataSet1 }

      const newChart1Data = {
        ...this.state.lineChartData.datasets,
        datasets: [newTempDataSet, newTemp2DataSet],
        ...this.state.lineChartData.datasets[1],
        datasets: [newTempDataSet, newTemp2DataSet],

        labels: this.state.lineChartData.labels.concat(
          new Date().toLocaleTimeString()
        )
      }
      const newPieChartData = {
        ...this.state.pieData.datasets,
        datasets: [newPieData]
      }


      const gaugeVal = value.data.temperature
      // console.log([this.state.lineChartData.datasets[0].data, this.state.lineChartData.datasets[1].data])
      this.setState({ lineChartData: newChart1Data, gauge: gaugeVal});
      console.log(this.state)
      }
      if (value.data.humidity) {
          const gaugeHumidityVal = value.data.humidity
          this.setState({gaugeHumidity: gaugeHumidityVal });
      }
    }
  }
// MAX_TEMP_READINGS = 4610
 //////////////////////////////////////////////////////////////////////////////////////////////
    
  

  render() {
    return (
      <div className = "climate stuff"> 
      {/* {this.state.weather} {this.state.cloudCover} {this.state.windspeeds} */}
      <div style = {{height: "50vh"}}>
        <LineChart className = "line chart"
          data={this.state.lineChartData}
          options={this.state.lineChartOptions}
        />
      </div>
      <div style={{
        width: "500px",
        height: "300px",
        position: 'absolute',
        align: 'left'
        
    }}>
        <h2>Current Indoor Temperature</h2>
        <ReactSpeedometer
            fluidWidth={false}
            minValue={10}
            maxValue={30}
            startColor='red'
            endColor="green"
            segments={5}
            value={this.state.gauge}
            needleColor="purple"
        />
    </div>
      <div style={{
        width: "500px",
        height: "300px",
        position: 'relative',
        align: 'right',
        left: '40vw'
        
    }}>
        <h2>Current Indoor Humidity</h2>
        <ReactSpeedometer
            fluidWidth={false}
            minValue={0}
            maxValue={60}
            startColor='red'
            endColor="green"
            segments={3}
            value={this.state.gaugeHumidity}
            needleColor="purple"
        />
    </div>
    <div>weather: {this.state.weather} </div>
    <div>the clouds are covering {this.state.cloudCover}% of the sky</div>
    <Pie data={this.state.pieData} />
    <div>the wind is moving at {this.state.windSpeed} mph</div>
  </div>
    );
  }
}

export default Climate;