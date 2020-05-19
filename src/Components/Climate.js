import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';




//openweatherapi if needed later
//"https://api.openweathermap.org/data/2.5/weather?q=Brentwood&units=metric&APPID=25801dad3a2f4039f56f90e1ae89d889"




function Climate() {
    const [chartData, setChartData] = useState({})
    const [externalTemp, setExternalTemp] = useState([])
    // const [internalTemp, setInternalTemp] = useState([])
    // const [weather, setWeather] = useState([])

    const chart = () => {
        let externalTemp = [];
        //let weather = [];
        // axios
        //     .get('http://192.168.1.113/things/http---192.168.1.100-things-DHTSensor'.json())
        //     .then(res => {
        //         console.log(res)
                
        //     })
        //     .catch(err => {console.log(err)})



        setChartData({
            datasets: [
                {
                    label: 'Outside Temperature',
                    data: externalTemp,
                    backgroundColor: [
                        'rgba(75,192,192,0.6)'
                    ],
                    borderWidth:4
                }
            ]
        })
    }

    useEffect(() => {
        chart() 
    }, [])

    var updateGraph = setInterval(addData, 60000);

    function addData(chart, label, data){ 
            axios
                .get("https://api.openweathermap.org/data/2.5/weather?q=Brentwood&units=metric&APPID=25801dad3a2f4039f56f90e1ae89d889")
                .then(res => {
                    //console.log(res.data)
                    externalTemp.push(parseInt(res.data.main.temp))
                    console.log(externalTemp)
                })
                .catch(err => {console.log(err)})
        externalTemp.update();
        
    }

    return (
        <div style={{position: 'relative', height: "70vh", width: "70vh", }}>
            <Line data= {externalTemp} options={{
                responsive: true,
                title: {text: 'Climate data', display: true},
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                autoskip: true,
                                maxTicksLimit: 10,
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false
                            }
                        }
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            type: 'time',
                            time: {
                                displayFormats: {
                                    time: 'h:mm a'
                                }
                            }
                        }
                    ]
                }
            }}/>
        </div>
    )
}

export default Climate
