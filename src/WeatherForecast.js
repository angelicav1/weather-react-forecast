import React, { useState, useEffect } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
  console.log(props);
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className='WeatherForecast'>
        <div className='row'>
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className='col WeatherForecast-box' key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = '894a2e7aa7f46eeca5d8778f6faa5a5b';
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
