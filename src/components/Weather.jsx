import React from "react"


export default function Weather(props)
{
    let data,localtime,weekday,month;
   if(props){
     data=props.data;
     localtime=props.data.location?.localtime;
    localtime=new Date(localtime)
    weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   }
    return(
      
<>        
     {props.data?
    <div class="image-container">
	<p class="time">
        <p class="temp">{data.current?.temp_c}<sup>O</sup>C</p>
        <img src={data.current?.condition.icon}/>{data.current?.condition.text}</p>
	   

   
	    <p class="time">{localtime.getHours()}:{localtime.getMinutes()}</p>
   
        <p class="place">{data.location?.name},{data.location?.region},{data.location?.country}</p>
	    <p class="date">{weekday[localtime.getDay()]},{localtime.getDate()} {month[localtime.getMonth()]} {localtime.getFullYear()} </p>
	
    </div>

    :null

         
        }
    </>    
    );
}