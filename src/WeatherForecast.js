import React, { useState, useEffect } from 'react';
import WeatherIcon from './WeatherIcon';
import "./WeatherForecast.css"
import axios from 'axios';

export default function WeatherForecast({coordinates}) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (coordinates) {
      const apiKey = 'f3009e4852fa0a079dab291dabf020c4';
      const apiUrl = "https://api.openweathermpa.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric";

      axios.get(apiUrl).then(handleResponse);
    }
  }, [coordinates]);
  
function handleResponse(response){
    console.log(response.data);
    setForecast(response.data);
}

if (forecast) {
  return (
    <div className='WeatherForecast'>
      <div className='row'>
        <div className='col'>
          <div className='forecast-day'>Thu</div>
          <WeatherIcon code='01d' size={36} />
          <div className='forecast-temp'>
            <span className='forecast-temp-max'>{Math.round(forecast.daily[0].temp.max)}</span>
            <span className='forecast-temp-min'>{Math.round(forecast.daily[0].temp.min)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
}