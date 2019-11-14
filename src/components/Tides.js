import React from 'react';
import Value from './Value.js'
import { toFahrenheit } from '../services/converters.js'

const Tides = props => {
  return (
    <div>
      <Value label={'Water Temperature'} value={`${toFahrenheit(props.waterTemperature)}`} unit={'°F'}/>
    </div>
  );
}

export default Tides;
