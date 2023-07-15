import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts'
export default function PrecipiationChart(props)
{
    const hours=props?.data?.forecast?.forecastday[0]?.hour;
    const date=props.data.location?.localtime.split(" ")[0];
    const time=[];
    const precipitation=[];

    const[precp,setPrecp]=useState([])
    const[tim,setTim]=useState([])
    useEffect(()=>{
    hours?.forEach((e)=>{
        precipitation.push(e?.precip_mm)
        time.push(e?.time.split(" ")[1])
    })
   
    setTim(time)
    setPrecp(precipitation)    
},[props?.data?.forecast?.forecastday[0]?.hour])

const series= [
  {
  name: 'Precipitation(mm)',
  data: precp,
  
}
]
const options=  {
  chart: {
    height: 350,
    type: 'area',
  }, 
   title: {
    text: 'Time(24Hr) v/s Precipitation(mm)',
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
    text: 'Precipitation(mm)'
  }
 },
 colors:['#F44336']
 
}




return (
  <div id="chart">
   <h2>Precipitation</h2> 
    <Chart options={options} series={series} type="area" class="c" height={500}/>
</div>
);

}
