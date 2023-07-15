import React from "react";

export default function Parameters(props)
{
    const data=props?.data;
    return(
        <>
        {props&&
            
        <div class="cards">
  <div class="card">
    	<div class="item-bundle">
        
        	<div class="item">
         <div class="icon-item">
         <img width="75" height="75" src="https://img.icons8.com/clouds/100/sunrise.png" alt="sunrise"/>
          
          </div>
          <div class="text-item">
            <p>Sunrise</p>      
            <p>{data.forecast?.forecastday[0]?.astro?.sunrise}</p>
          </div>
       </div>
    
       <div class="item">
         <div class="icon-item">
         <img width="75" height="75" src="https://img.icons8.com/external-wanicon-flat-wanicon/64/external-sunset-beach-wanicon-flat-wanicon.png" alt="external-sunset-beach-wanicon-flat-wanicon"/>
          </div>
          <div class="text-item">
            <p>Sunset</p>      
            <p> {data.forecast?.forecastday[0]?.astro?.sunset}</p>
          </div>
       </div>
 </div>
  	<div class="item-bundle2">
        
        	<div class="item">
          <div class="text-item">
            <p>Moonrise</p>      
            <p>{data.forecast?.forecastday[0]?.astro?.moonrise}</p>
          </div>
             <div class="icon-item">
             <img width="75" height="75" src="https://img.icons8.com/clouds/100/bright-moon.png" alt="moonrise"/>
          </div>
       </div>
    
       
        	<div class="item">
          <div class="text-item">
            <p>Moonset</p>      
            <p>{data.forecast?.forecastday[0]?.astro?.moonset}</p>
          </div>
             <div class="icon-item">
             <img width="75" height="75" src="https://img.icons8.com/bubbles/50/moon-satellite.png" alt="moonset"/>
          </div>
      
       </div>
 </div>
    
  </div>
  
   <div class="card">
    	<div class="item-bundle">
        
        	<div class="item">
         <div class="icon-item">
         <img width="75" height="75" src="https://img.icons8.com/stickers/100/thermometer-three-quarters.png" alt="minimum"/>
      
          </div>
          <div class="text-item">
            <p>Minimum</p>      
            <p>{data.forecast?.forecastday[0]?.day?.mintemp_c} <sup>o</sup>C</p>
          </div>
       </div>
    
       <div class="item">
         <div class="icon-item">
         <img width="75" height="75" src="https://img.icons8.com/clouds/100/clouds.png" alt="clouds"/>
          </div>
          <div class="text-item">
            <p>Clouds</p>      
            <p>{data?.current?.cloud}%</p>
          </div>
       </div>
 </div>
  	<div class="item-bundle2">
        
        	<div class="item">
          <div class="text-item">
            <p>Maximum</p>      
            <p>{data.forecast?.forecastday[0]?.day?.maxtemp_c}<sup>o</sup>C</p>
          </div>
             <div class="icon-item">
             <img width="75" height="75" src="https://img.icons8.com/color/48/thermometer.png" alt="maximum"/>  
	</div>
       </div>
    
       
        	<div class="item">
          <div class="text-item">
            <p>UV   Index</p>      
            <p>{data?.current?.uv}</p>
          </div>
             <div class="icon-item">
             <img width="75" height="75" src="https://img.icons8.com/external-justicon-flat-justicon/64/external-uv-index-weather-justicon-flat-justicon-1.png" alt="uv"/>         
</div>
      
       </div>
 </div>
</div>
  
   <div class="card">
    	<div class="item-bundle">
        
        	<div class="item">
         <div class="icon-item">
         <img width="75" height="75" src="https://img.icons8.com/arcade/64/hail.png" alt="precipitation"/>      
  </div>
          <div class="text-item">
            <p>Precipitation</p>      
            <p>{data.forecast?.forecastday[0]?.day?.totalprecip_mm} mm</p>
          </div>
       </div>
    
       <div class="item">
         <div class="icon-item">
         <img width="75" height="75" src="https://img.icons8.com/parakeet/48/humidity.png" alt="humidity"/> 
          </div>
          <div class="text-item">
            <p>Humidity</p>      
            <p>{data?.current?.humidity}%</p>
          </div>
       </div>
 </div>
  	<div class="item-bundle2">
        
        	<div class="item">
          <div class="text-item">
            <p>Wind</p>      
            <p>{data?.current?.wind_kph} kph</p>
          </div>
             <div class="icon-item">
             <img width="100" height="100" src="https://img.icons8.com/clouds/100/wind.png" alt="wind"/>
          </div>
       </div>
    
       
        	<div class="item">
          <div class="text-item">
            <p>Pressure</p>      
            <p>{data?.current?.pressure_mb} in</p>
          </div>
             <div class="icon-item">
             <img width="75" height="75" src="https://img.icons8.com/color/48/pressure.png" alt="pressure"/> 
	</div>
      
       </div>
 </div>
   
  </div>
  
  
  
  </div>
    }
 </>
    );
}