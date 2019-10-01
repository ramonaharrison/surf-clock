import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.js'
import Temperature from './components/Temperature.js'
import Waves from './components/Waves.js'
import Wind from './components/Wind.js'
import Tides from './components/Tides.js'
import Daylength from './components/Daylength.js'
import LocationChooser from './components/location/LocationChooser.js'

class App extends Component {

  render() {
    return (
      <div className="App">
      <LocationChooser />
      <Clock />
      <Temperature />
      <Waves />
      <Wind />
      <Tides />
      <Daylength />
      </div>
    );
  }
}

export default App;
