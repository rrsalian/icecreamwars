import { useState, useEffect } from "react";
import { getAllWeather } from "../../services/WeatherService";

export function WeatherForcast() {
    const [periods, setPeriods] = useState<any[]>();

    useEffect( () => {
        getAllWeather().then(data => setPeriods(data.properties.periods));
    },[])

    return (
        <div>
            {
                periods?.map( period => 
                    <div>
                        <h3> {period.name} </h3>
                        <p> {period.detailedForcast} </p>
                        <img src={period.icon} alt="icon" />
                    </div>    
                )
            }

        </div>
    )
}