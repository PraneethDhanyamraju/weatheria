import React from "react";
import img from "./no2.png"

export default function AirQualityIndex(props)
{
    
    const data=props?.data?.current?.air_quality;
    const uk=["Low","Low","Low","Moderate","Moderate","Moderate","High","High","High","Very High"]
    const us=["Good","Moderate","Unhealthy for sensitive group","Unhealthy","Very Unhealthy","Hazardous"]
    return(
        <div class="air-container">
            
 
    <div class="card">
    	<div class="item-bundle">
        
        	<div class="item">
         <div class="icon-item">
            <img src="https://cdn-icons-png.flaticon.com/512/958/958528.png" width="75" height="75" alt="carbon-monoxide"/> 
        </div>
          <div class="text-item">
            <p></p>
            {parseFloat(data?.co).toFixed(2)}&mu;g/m<sup>3</sup>
          </div>
       </div>
    
       <div class="item">
         <div class="icon-item">
         <img width="75" height="75" src="https://cdn-icons-png.flaticon.com/512/6835/6835384.png" alt="sulphur-dioxide"/> 
          </div>
          <div class="text-item">
          <p></p>
          {parseFloat(data?.so2).toFixed(2)}&mu;g/m<sup>3</sup>
          </div>
       </div>
 </div>
  	<div class="item-bundle2">
        
        	<div class="item">
          <div class="text-item">
          <p></p>
          {parseFloat(data?.o3).toFixed(2)}&mu;g/m<sup>3</sup>
          </div>
             <div class="icon-item">
             <img width="75" height="75" src="https://cdn-icons-png.flaticon.com/512/5782/5782183.png" alt="ozone"/>
          </div>
       </div>
    
       
        	<div class="item">
          <div class="text-item">
          <p></p>
          {parseFloat(data?.no2.toFixed(2))}&mu;g/m<sup>3</sup>
          </div>
             <div class="icon-item">
             <img width="100" height="80" src={img} alt="nitrogen-dioxide"/> 
	</div> 
      
       </div>
 </div>

</div>
  
<div class="card" style={{"marginLeft":"20px"}}>
    	<div class="item-bundle">
        
        	<div class="item">
         <div class="icon-item">
         <img width="48" height="75" src="https://img.icons8.com/color/48/dust.png" alt="dust"/>
        </div>
          <div class="text-item">
            <p>PM2.5</p>
           {parseFloat(data?.pm2_5).toFixed(2)}&mu;g/m<sup>3</sup>
          </div>
       </div>
    
       <div class="item">
         <div class="icon-item">
         <img width="75" height="75" src="https://img.icons8.com/officel/16/dust.png" alt="dust"/>
          </div>
          <div class="text-item">
          <p>PM10.0</p>
          {parseFloat(data?.pm10).toFixed(2)}&mu;g/m<sup>3</sup>
          </div>
       </div>
 </div>
  	
</div>


 
        </div>
    );
}