import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts'
export default function TemperatureChart(props)
{
    const hours=props?.data?.forecast?.forecastday[0]?.hour;
    const date=props.data.location?.localtime.split(" ")[0];
    const time=[];
    const temp=[];

    const[tem,setTem]=useState([])
    const[tim,setTim]=useState([])
    useEffect(()=>{
    hours?.forEach((e)=>{
        temp.push(e?.temp_c)
        time.push(e?.time.split(" ")[1])
    })
    setTem(temp)
    setTim(time)
   
},[props?.data?.forecast?.forecastday[0]?.hour])

const series= [
  {
  name: 'Temperature(C)',
  data: tem,

}
]
const options=  {
  chart: {
    height: 350,
    type: 'area',
  }, 
   title: {
    text: 'Time(24Hr) v/s Temperature(C)',
    align: 'center'
    
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
 xaxis:{
  categories:tim,
  title: {
    text: `Time(24Hr) ${date}`
  }
 },
 yaxis:{
  title: {
    text: 'Temperature(C)'
  }
 },
 colors:["#5e6259"]
}




return (
  <div id="chart">
    <h2>Temperature</h2> 
  <Chart options={options} series={series} type="area" class="c" height={500}/>
</div>
);

}