import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search()
{
    const[city,setCity]=useState("");
    
    return(
<>
    <input id="text" type="text" placeholder="Enter any city name" onChange={(e)=>{
        setCity(e.target.value); 
    }}/>
    <button onClick={()=>{
        document.getElementById("text").value="";
         
    }}>Weather</button>
</>  
    );
}
