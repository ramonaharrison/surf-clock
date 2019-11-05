import React from 'react';
import Value from './Value.js'

const Waves = props => {
  return (
    <div className="waves">
      <Value label={'Wave Direction'} value={props.waveDirection}/>
      <Value label={'Wave Height'} value={props.waveHeight}/>
      <Value label={'Wave Period'} value={props.wavePeriod}/>
    </div>
  );
}

export default Waves;
