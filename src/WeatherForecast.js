import React, { useState} from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(props)

  if (loaded) {
    console.log(forecast);
return (
  <div className='WeatherForecast'>
    <div className='row'>
      <div className='col'>
        <WeatherForecastDay data={forecast[0]} />
      </div>
    </div>
  </div>
);
  } else {
    let apiKey = 'f3009e4852fa0a079dab291dabf020c4';
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  
    return null;
}
}
