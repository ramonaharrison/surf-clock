import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight,airTemperature';



const fetchLatLong = (location) => {
  var encodedLocation = encodeURIComponent(location)
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${process.env.REACT_APP_OPEN_CAGE_KEY}`)
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });
}

const fetchWeather = (lat, long, params) => {
  fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
    headers: {
      'Authorization': process.env.REACT_APP_STORM_GLASS_KEY
    }
  })
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });
}

//fetchLatLong("Rockaway Beach, NY")

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
