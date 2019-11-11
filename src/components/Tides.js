import React from 'react';
import Value from './Value.js'
import { toFahrenheit } from '../services/converters.js'

const Tides = props => {
  return (
    <div className="tides">
      <Value label={'Water Temperature'} value={`${toFahrenheit(props.waterTemperature)}`} unit={'°F'}/>
      <Value label={'High Tide'} value={'0'}/>
      <Value label={'Low Tide'} value={'0'}/>
    </div>
  );
}

export default Tides;
