import mockAstronomy from './mock/astronomy.js'
import mockWeather from './mock/weather.js'
import mockTide from './mock/tide.js'

const fetchFromNetwork = false

export const fetchLatLong = async (location) => {
  const encodedLocation = encodeURIComponent(location)
  const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${process.env.REACT_APP_OPEN_CAGE_KEY}`)
    const json = await response.json();
    return json.results[0].geometry
  }

  export const fetchAstronomy = async (lat, long) => {
    if (fetchFromNetwork) {
      const response = await fetch(`https://api.stormglass.io/v1/astronomy/point?lat=${lat}&lng=${long}&numberOfDays=1`, {
        headers: {
          'Authorization': process.env.REACT_APP_STORM_GLASS_KEY
        }
      })
      const json = await response.json();
      return json
    } else {
      return mockAstronomy
    }
  }

  export const fetchTide = async (lat, long, now) => {
    if (fetchFromNetwork) {
      const response = await fetch(`https://api.stormglass.io/v1/tide/extremes/point?lat=${lat}&lng=${long}&start=${now}&end=${now}`, {
        headers: {
          'Authorization': process.env.REACT_APP_STORM_GLASS_KE
        }
      })
      const json = await response.json();
      return json
    } else {
      return mockTide
    }
  }

  export const fetchWeather = async (lat, long, now) => {
    if (fetchFromNetwork) {
      const response = await fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${long}&start=${now}&end=${now}&source=noaa`, {
        headers: {
          'Authorization': process.env.REACT_APP_STORM_GLASS_KEY
        }
      })

      const json = await response.json();
      return json.hours[0]
    } else {
      return mockWeather.hours[0]
    }
  }
