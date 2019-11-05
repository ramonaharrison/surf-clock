import React from 'react';
import Value from './Value.js'

const Tides = props => {
  return (
    <div className="tides">
      <Value label={'Water Temperature'} value={props.waterTemperature}/>
      <Value label={'High Tide'} value={''}/>
      <Value label={'Low Tide'} value={''}/>
    </div>
  );
}

export default Tides;
