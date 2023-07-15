import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts'
export default function WindChart(props)
{
    const hours=props?.data?.forecast?.forecastday[0]?.hour;
    const date=props.data.location?.localtime.split(" ")[0];
    const time=[];
    const wind=[];

    const[win,setWin]=useState([])
    const[tim,setTim]=useState([])
    useEffect(()=>{
    hours?.forEach((e)=>{
        wind.push(e?.wind_kph)
        time.push(e?.time.split(" ")[1])
    })
   
    setTim(time)
    setWin(wind)
    
},[props?.data?.forecast?.forecastday[0]?.hour])

const series= [
  {
  name: 'Wind(kph)',
  data: win,

}
]
const options=  {
  chart: {
    height: 350,
    type: 'area',
  }, 
   title: {
    text: 'Time(24Hr) v/s Wind(kph)',
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
    text: 'Wind(kph)'
  }
 },
 colors:["#cbf808"]
}




return (
  <div id="chart">
    <h2>Wind</h2> 
  <Chart options={options} series={series} type="area" class="c" height={500}/>
  
</div>
);

}
