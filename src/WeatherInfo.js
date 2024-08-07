import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import "./WeatherInfo.css";

export default function WeatherInfro(props) {
  return (
    <div className='WeatherInfo'>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className='text-capitalize'>{props.data.description}</li>
      </ul>
      <div className='row'>
        <div className='col-6'>
          <div className='clearfix'>
            <div className='float-left'>
              <WeatherIcon code={props.data.icon} size={50} />
            </div>
            <div className='float-left'>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className='col-6'>
          <ul>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}