import React from "react";

export default function Alerts(props)
{
    const alerts=props?.data?.alerts?.alert;
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   
    return (
        <>        
        {alerts?.length<=0?
            <div class="alerts-container">
                <h2>Currently there are no alerts to show!</h2>
            </div>:

            <div class="alerts-container">
                <marquee behavior="" direction="">{alerts[0].desc}</marquee>
                {alerts?.map((item)=>(
                    <div class="alert">
                        <h1>Alert on {item.event}</h1>
                        <h3><i>{item.note}</i></h3>
                        <h2>{item.headline}</h2>
                        {item.serverity&&<h3>Severity:<b>{item.severity}</b></h3>}
                        {item.certainty&&<h3>Certainity:<b>{item.certainty}</b></h3>}
                        <h3>Effective from  {weekday[new Date(item.effective.split("T")[0]).getDay()]},{new Date(item.effective.split("T")[0]).getDate()} {month[new Date(item.effective.split("T")[0]).getMonth()]} {new Date(item.effective.split("T")[0]).getFullYear()} at {item.effective.split("T")[1].split("+")[0]}  </h3>
                        <h3>Most likley to end {weekday[new Date(item.expires.split("T")[0]).getDay()]},{new Date(item.expires.split("T")[0]).getDate()} {month[new Date(item.expires.split("T")[0]).getMonth()]} {new Date(item.expires.split("T")[0]).getFullYear()} at {item.expires.split("T")[1].split("+")[0]}  </h3>
                        <h4>{item.desc}</h4>
                      {item.instruction?<h4>Instruction: {item.instruction}</h4>:null}
                     </div>   
                    ))
                }
                
            </div>
 
        }
    </>
    );
}
