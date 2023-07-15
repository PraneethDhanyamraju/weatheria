import React, { useEffect, useState } from "react";
import Search from "./Search";
import Weather from "./Weather";
import Parameters from "./Parameters";
import WeatherCarousel from "./WeatherCarousel";
import Alerts from "./Alerts";
import axios from "axios";
import { debounce } from 'lodash';
import TemperatureChart from "./TemperatureChart";
import WindChart from "./WindChart";
import HumidityCloudsChart from "./HumidityCloudsChart";
import PrecipiationChart from "./PrecipitationChart";
import AirQualityIndex from "./AirQualityIndex";


export default function Page() {
    const [response, setResponse] = useState({});
    const [error, setError] = useState("");
   
    const [list, setList] = useState([]);
    const [lat, setLat] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [long, setLong] = useState("");
    function run(l, lo) {
      
        axios.get(`${process.env.REACT_APP_URL}${l},${lo}${process.env.REACT_APP_EXTURL}`, {
       
        headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host':  process.env.REACT_APP_API_HOST
            }
        }).then((response) => {
            setResponse(response.data);
            setError("");

        }).catch((error) => {
            setResponse("");
            console.log(error)
            setError(error.response.data.error.message);
        
        });
    }


    
useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'PageDown'||event.key === 'PageUp') {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleInputChange = debounce((e) => {

        
       listCity(e.target.value);
        setError("")
       
  }, 300);


    function listCity(city) {
      
     if(city=='')
     {
        setList([])
     }
       if(city!='')
        {   
        axios.get(`${process.env.REACT_APP_SEARCH_URL}${city}`, {
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            }
        }).then((response) => {
                 setList(response.data)
                 
           
        }).catch((error) => {
          
          if(error.response&&error.response.status===400)
          {
          }
        })
    }
    }

    
    





    return (<>
    
        {Object.keys(response).length === 0 ?
            <div class="home-container" >
            
                <h1 class="type"> WEATHERIA </h1>
                <div class="homepage">
                <input id="text" class="inp" type="text" placeholder="Enter any city name" onChange={(e) => {
                        listCity(e.target.value)
                    setError("")
                }} />
                
                <button class="weather-btn" onClick={() => {
                  
                    run(lat, long);
                      document.getElementById("text").value="";
                  
                }}>Weather</button>
                <h4>{error}</h4>
                <div class="list-container">
                {list.length > 0 && list.map((item) => (
                    <div class="list-home" onClick={() => {
                        setLat(item.lat)
                        setLong(item.lon)
                        setList("")
                        document.getElementById("text").value = `${item.name},${item.region},${item.country}`;
                    }}>
                        <p>{item.name},{item.region},{item.country}</p>

                    </div>
                    
                ))
                }
                </div>
            </div>
            </div>

            : <div class="container">

                
                <h1 class="type" className="heading"> WEATHERIA </h1>
                <div class="text-box">
                    <input id="text" class="inp-weather" type="text" placeholder="Enter any city name" onChange={handleInputChange} />
                    <button class="btn-weather" onClick={() => {
                        
                        run(lat, long);
                        
                        document.getElementById("text").value="";
                        
                    }}>Weather</button>
                    

                </div>
                {list.length > 0 && list.map((item) => (
                    <div class="list-weather">
                        <p class="hand" onClick={() => {
                            
                            setLat(item.lat)
                            setLong(item.lon)
                            setList("")
                    
                            document.getElementById("text").value = `${item.name},${item.region},${item.country}`;
                        }}>{item.name},{item.region},{item.country}</p>


                    </div>

                ))
                }
                <br />
                <Weather data={response} error={error} />
                <Parameters data={response} error={error} />
                <h2>Air Quality Index</h2>
                <AirQualityIndex data={response} />
                <Alerts data={response} />
                <div class="chart-container">
                <TemperatureChart class="graph" data={response} />
                <HumidityCloudsChart data={response} />
                <PrecipiationChart data={response} />
                <WindChart data={response} />
                </div>

                <WeatherCarousel data={response} error={error} />
                <i>&copy; Icons<a href="https://www.flaticon.com/">  FlatIcon</a> </i>
                <i>&copy; Icons<a href="https://icons8.com/">Icons8</a> </i>
            </div>
        }
    </>
    )
}