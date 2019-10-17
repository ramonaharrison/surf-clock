import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight,airTemperature';

const openCageKey = '34157201f173440c9fad0a7ba181bf06'
const stormGlassKey = '2ce8376e-d8c2-11e9-b707-0242ac130004-2ce83886-d8c2-11e9-b707-0242ac130004'

const fetchLatLong = (location) => {
  var encodedLocation = encodeURIComponent(location)
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${openCageKey}`)
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });
}

const fetchWeather = (lat, long, params) => {
  fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
    headers: {
      'Authorization': stormGlassKey
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
