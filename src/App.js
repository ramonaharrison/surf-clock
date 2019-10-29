import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.js'
import Temperature from './components/Temperature.js'
import Waves from './components/Waves.js'
import Wind from './components/Wind.js'
import Tides from './components/Tides.js'
import Daylength from './components/Daylength.js'
import LocationChooser from './components/location/LocationChooser.js'

function App() {

  // State
  const [location, setLocation] = useState({
    latitude: '',
    longitude: ''
  });
  const [astronomy, setAstronomy] = useState({
    sunrise: '',
    sunset: ''
  });
  const [weather, setWeather] = useState();

  const handleLocationChange = location => {
    fetchLatLong(location)
  };

  const fetchLatLong = async (location) => {
    const encodedLocation = encodeURIComponent(location)
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${process.env.REACT_APP_OPEN_CAGE_KEY}`)
    const json = await response.json();
    const latLong = json.results[0].geometry

    console.log("fetchLatLong", json)

    setLocation({
      latitude: latLong.lat,
      longitude: latLong.lng
    });
    fetchAstronomy(latLong.lat, latLong.lng)
    fetchWeather(latLong.lat, latLong.lng)
  }

  const fetchAstronomy = async (lat, long, params) => {
    const response = await fetch(`https://api.stormglass.io/v1/astronomy/point?lat=${lat}&lng=${long}&numberOfDays=1`, {
      headers: {
        'Authorization': process.env.REACT_APP_STORM_GLASS_KEY
      }
    })
    const json = await response.json();

    setAstronomy({
      sunrise: json.days[0].sunrise,
      sunset: json.days[0].sunset
    });
  }

  const fetchWeather = async (lat, long) => {
    const now = (new Date()).toISOString()
    const response = await fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${long}&start=${now}&end=${now}&source=noaa`, {
      headers: {
        'Authorization': process.env.REACT_APP_STORM_GLASS_KEY
      }
    })

    const json = await response.json();

    console.log("json", json);

    if (json.hours && json.hours.length > 0) {
      const now = json.hours[0]
      console.log("now", now);
      setWeather({
        airTemperature: now.airTemperature[0].value, // Air temperature in degrees celsius
        humidity: now.humidity[0].value, // Relative humidity in percent
        cloudCover: now.cloudCover[0].value, // Total cloud coverage in percent
        precipitation: now.precipitation[0].value, // Mean precipitation in kg/m²
        windDirection: now.windDirection[0].value, // Direction of wind. 0° indicates wind coming from north
        windSpeed: now.windSpeed[0].value, // Speed of wind in meters per second
        gust: now.gust[0].value, // Wind gust in m/s
        waterTemperature: now.waterTemperature[0].value, // Water temperature in degrees celsius
        waveDirection: now.waveDirection[0].value, // Direction of combined wind and swell waves. 0° indicates waves coming from north
        waveHeight: now.waveHeight[0].value, // Height of combined wind and swell waves in meters
        wavePeriod: now.wavePeriod[0].value // Period of combined wind and swell waves in seconds
      })
    }
  }

  if (weather && astronomy) {
    return (
      <div className="App">
      <LocationChooser onLocationChange={handleLocationChange}/>
      <Clock />
      <Temperature temperature={weather.airTemperature}/>
      <Waves waveDirection={weather.waveDirection} waveHeight={weather.waveHeight} wavePeriod={weather.wavePeriod}/>
      <Wind windDirection={weather.windDirection} windSpeed={weather.windSpeed} gust={weather.gust}/>
      <Tides waterTemperature={weather.waterTemperature}/>
      <Daylength sunrise={astronomy.sunrise} sunset={astronomy.sunset}/>
      </div>
    );
  } else {
    return (
      <div className="App">
      <LocationChooser onLocationChange={handleLocationChange}/>
      <Clock />
      </div>
    )
  }
}

export default App;
