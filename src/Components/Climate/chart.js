import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => <Line
    options={props.options}
    data ={props.data}
     />;
export default Chart;