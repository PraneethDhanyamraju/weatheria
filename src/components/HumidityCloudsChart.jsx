import React,{ useEffect,useState }from "react";
import Chart from 'react-apexcharts'
export default function HumidityCloudsChart(props)
{
     const hours=props?.data?.forecast?.forecastday[0]?.hour;
    const date=props.data.location?.localtime.split(" ")[0];
    const time=[];
    const humidity=[];
    const clouds=[];

    const[clou,setClou]=useState([])
    const[hum,setHum]=useState([])
    const[tim,setTim]=useState([])
    useEffect(()=>{
    hours?.forEach((e)=>{
      humidity.push(e?.humidity)
        clouds.push(e?.cloud)
        time.push(e?.time.split(" ")[1])
    })
  setTim(time)
   setHum(humidity)
   setClou(clouds)
 
},[props?.data?.forecast?.forecastday[0]?.hour])


const series= [
    
  {
    name: 'Humidity(%)',
    data: hum
  },
   
  {
    name: 'Clouds(%)',
    data: clou
  },
]
  const options=  {
    chart: {
      height: 350,
      type: 'area',
    }, 
     title: {
      text: 'Time(24Hr) v/s Clouds(%) v/s Humidity(%))',
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
        }
       },
   yaxis:[{
    title: {
      text: 'Humidity(%)'
    }
  },
    {
      title: {
        text: 'Clouds(%)'
      }
  }
  ]
   
   
  }
  
  
  
  
  
return (
  <div id="chart">
    <h2>Humidity & Clouds</h2> 
  <Chart options={options} series={series} type="area" class="c" height={500}/>
</div>
);

}
