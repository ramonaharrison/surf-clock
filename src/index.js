import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight,airTemperature';

// fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//   headers: {
//     'Authorization': '2ce8376e-d8c2-11e9-b707-0242ac130004-2ce83886-d8c2-11e9-b707-0242ac130004'
//   }
// }).then((response) => response.json()).then((jsonData) => {
//   console.log(jsonData);
// });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
