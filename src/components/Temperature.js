import React from 'react';
import Value from './Value.js'

const Temperature = props => {
  return (
    <div className="temperature">
      <Value label={'Air Temperature'} value={`${props.airTemperature}°F`}/>
    </div>
  );
}

export default Temperature;
