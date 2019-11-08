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
import { fetchLatLong, fetchAstronomy, fetchTide, fetchWeather } from './services/api.js'

function App() {
  const [astronomy, setAstronomy] = useState();
  const [weather, setWeather] = useState();
  const [tide, setTide] = useState();

  const handleLocationChange = location => {
    const now = (new Date()).toISOString()
    updateWeather(location, now)
  };

  const updateWeather = async (location, now) => {
    const latLong = await fetchLatLong(location)

    const astronomy = await fetchAstronomy(latLong.lat, latLong.lng)
    setAstronomy({
      sunrise: astronomy.days[0].sunrise,
      sunset: astronomy.days[0].sunset
    });

    const tide = await fetchTide(latLong.lat, latLong.lng, now)
    setTide({
      extremas: tide.extremas
    });

    const weather = await fetchWeather(latLong.lat, latLong.lng, now)
    setWeather({
      airTemperature: weather.airTemperature[0].value, // Air temperature in degrees celsius
      humidity: weather.humidity[0].value, // Relative humidity in percent
      cloudCover: weather.cloudCover[0].value, // Total cloud coverage in percent
      precipitation: weather.precipitation[0].value, // Mean precipitation in kg/m²
      windDirection: weather.windDirection[0].value, // Direction of wind. 0° indicates wind coming from north
      windSpeed: weather.windSpeed[0].value, // Speed of wind in meters per second
      gust: weather.gust[0].value, // Wind gust in m/s
      waterTemperature: weather.waterTemperature[0].value, // Water temperature in degrees celsius
      waveDirection: weather.waveDirection[0].value, // Direction of combined wind and swell waves. 0° indicates waves coming from north
      waveHeight: weather.waveHeight[0].value, // Height of combined wind and swell waves in meters
      wavePeriod: weather.wavePeriod[0].value // Period of combined wind and swell waves in seconds
    })
  }

    if (weather && astronomy && tide) {
      return (
        <div className="App">
        <LocationChooser onLocationChange={handleLocationChange}/>
        <Clock />

        <table>
        <tr>
        <td><Daylength sunrise={astronomy.sunrise} sunset={astronomy.sunset}/></td>
        <td><Temperature airTemperature={weather.airTemperature}/><Wind windDirection={weather.windDirection} windSpeed={weather.windSpeed} gust={weather.gust}/></td>
        <td><Waves waveDirection={weather.waveDirection} waveHeight={weather.waveHeight} wavePeriod={weather.wavePeriod}/></td>
        <td><Tides waterTemperature={weather.waterTemperature}/></td>
        </tr>
        </table>
        </div>
      );
    } else {
      return (
        <div className="App">
        <LocationChooser onLocationChange={handleLocationChange}/>
        </div>
      )
    }
  }

  export default App;
