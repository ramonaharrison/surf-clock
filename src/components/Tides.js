import React from 'react';
import Value from './Value.js'

const Tides = props => {
  return (
    <div className="tides">
      <Value label={'Water Temperature'} value={props.waterTemperature}/>
      <Value label={'High Tide'} value={'0'}/>
      <Value label={'Low Tide'} value={'0'}/>
    </div>
  );
}

export default Tides;
