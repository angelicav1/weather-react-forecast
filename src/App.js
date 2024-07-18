import React from "react";
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='New York' />
        <footer>
          This project was coded by{' '}
          <a
            href='https://wildbyte.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Angelica Victoria
          </a>{' '}
          and is{' '}
          <a
            href='https://github.com/angelicav1/weather-react-forecast'
            target='_blank'
            rel='noopener noreferrer'
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
