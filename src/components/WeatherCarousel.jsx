import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';  


export default function WeatherCarousel(props)
{
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   
    const hours=props?.data?.forecast?.forecastday[0]?.hour;
    const hour=props?.data?.forecast?.forecastday[1]?.hour;
    const h=props?.data?.forecast?.forecastday[2]?.hour;
    
    return(<>
        <h2>Forecast for the next three days</h2>
          <div class="card-stack-container">
         
            <Carousel  autoPlay={true} infiniteLoop={true}  showArrows={true}width="100%" centerMode={true} centerSlidePercentage={5}>
{
hours?.map((item)=>(
<div class="card-stack">
<div class="carousel">          
<div class="card-details">
<div class="parameter-parent">
	<div class="parameters">
	
	<div><img width="20" height="30" src="https://img.icons8.com/clouds/100/wind.png" alt="wind"/><p style={{"fontSize":"15px"}}>{item?.wind_kph}kph</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/clouds/100/clouds.png" alt="clouds"/><p style={{"fontSize":"15px"}}>{item?.cloud}%</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/color/48/pressure.png" alt="pressure"/><p style={{"fontSize":"15px"}}>{item?.pressure_mb}mb</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/parakeet/48/humidity.png" alt="humidity"/><p style={{"fontSize":"15px"}}>{item?.humidity}%</p></div>
    <div>  <img width="20" height="30" src="https://img.icons8.com/arcade/64/hail.png" alt="precipitation"/><p style={{"fontSize":"15px"}}>{item?.precip_mm}mm</p></div>
    </div>
</div>
<div class="card-body">
<img width="auto" height="auto" src={item?.condition?.icon}/>
          
	<h5>{item?.condition?.text}</h5>
	<h2 class="inline-text">{item?.temp_c}<sup>O</sup>C</h2> &nbsp; 
    <h4>{weekday[new Date(item?.time.split(" ")[0].split("-")).getDay()]}</h4>
    <h4>{new Date(item?.time.split(" ")[0].split("-")).getDate()} {month[new Date(item?.time.split(" ")[0].split("-")).getMonth()]} {new Date(item?.time.split(" ")[0].split("-")).getFullYear()}
	</h4>
    <h3>{item?.time.split(" ")[1]}</h3>	
</div>
</div>		
</div>
</div>

))}
</Carousel>

<Carousel  autoPlay={true}  infiniteLoop={true} showArrows={true}width="100%" centerMode={true} centerSlidePercentage={5}>
{
hour?.map((item)=>(

<div class="card-stack">
<div class="carousel">          
<div class="card-details">
<div class="parameter-parent">
	<div class="parameters">
	
	<div><img width="20" height="30" src="https://img.icons8.com/clouds/100/wind.png" alt="wind"/><p style={{"fontSize":"15px"}}>{item?.wind_kph}kph</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/clouds/100/clouds.png" alt="clouds"/><p style={{"fontSize":"15px"}}>{item?.cloud}%</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/color/48/pressure.png" alt="pressure"/><p style={{"fontSize":"15px"}}>{item?.pressure_mb}mb</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/parakeet/48/humidity.png" alt="humidity"/><p style={{"fontSize":"15px"}}>{item?.humidity}%</p></div>
    <div>  <img width="20" height="30" src="https://img.icons8.com/arcade/64/hail.png" alt="precipitation"/><p style={{"fontSize":"15px"}}>{item?.precip_mm}mm</p></div>
    </div>
</div>
<div class="card-body">
<img width="150" height="150" src={item?.condition?.icon}/>
          
	<h5>{item?.condition?.text}</h5>
	<h2 class="inline-text">{item?.temp_c}<sup>O</sup>C</h2> &nbsp; 
    <h4>{weekday[new Date(item?.time.split(" ")[0].split("-")).getDay()]}</h4>
    <h4>{new Date(item?.time.split(" ")[0].split("-")).getDate()} {month[new Date(item?.time.split(" ")[0].split("-")).getMonth()]} {new Date(item?.time.split(" ")[0].split("-")).getFullYear()}
	</h4>
	<h3>{item?.time.split(" ")[1]}</h3>	
</div>
</div>		
</div>
</div>

))}

</Carousel>
<Carousel  autoPlay={true}  infiniteLoop={true}  showArrows={true}width="100%" centerMode={true} centerSlidePercentage={5}>
{
h?.map((item)=>(
<div class="card-stack">
<div class="carousel">          
<div class="card-details">
<div class="parameter-parent">
	<div class="parameters">
	
	<div><img width="20" height="30" src="https://img.icons8.com/clouds/100/wind.png" alt="wind"/><p style={{"fontSize":"15px"}}>{item?.wind_kph}kph</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/clouds/100/clouds.png" alt="clouds"/><p style={{"fontSize":"15px"}}>{item?.cloud}%</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/color/48/pressure.png" alt="pressure"/><p style={{"fontSize":"15px"}}>{item?.pressure_mb}mb</p></div>
    <div><img width="20" height="30" src="https://img.icons8.com/parakeet/48/humidity.png" alt="humidity"/><p style={{"fontSize":"15px"}}>{item?.humidity}%</p></div>
    <div>  <img width="20" height="30" src="https://img.icons8.com/arcade/64/hail.png" alt="precipitation"/><p style={{"fontSize":"15px"}}>{item?.precip_mm}mm</p></div>
    </div>
</div>
<div class="card-body">
<img width="150" height="150" src={item?.condition?.icon}/>
          
	<h5>{item?.condition?.text}</h5>
	<h2 class="inline-text">{item?.temp_c}<sup>O</sup>C</h2> &nbsp; 
    <h4>{weekday[new Date(item?.time.split(" ")[0].split("-")).getDay()]}</h4>
    <h4>{new Date(item?.time.split(" ")[0].split("-")).getDate()} {month[new Date(item?.time.split(" ")[0].split("-")).getMonth()]} {new Date(item?.time.split(" ")[0].split("-")).getFullYear()}
	</h4>
	<h3>{item?.time.split(" ")[1]}</h3>	
</div>
</div>		
</div>
</div>

))}

        </Carousel>
 
 </div>  
 </>
    );
}