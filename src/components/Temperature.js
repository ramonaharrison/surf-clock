import React from 'react';
import Value from './Value.js'
import { toFahrenheit } from '../services/converters.js'

const Temperature = props => {
  return (
    <div className="temperature">
      <Value label={'Air Temperature'} value={`${toFahrenheit(props.airTemperature)}`} unit={'°F'}/>
    </div>
  );
}

export default Temperature;
