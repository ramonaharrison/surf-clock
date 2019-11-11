import React from 'react';
import Value from './Value.js'

const Waves = props => {
  return (
    <div className="waves">
      <Value label={'Wave Direction'} value={Math.round(props.waveDirection)} unit={'°'}/>
      <Value label={'Wave Height'} value={props.waveHeight} unit={'meters'}/>
      <Value label={'Wave Period'} value={Math.round(props.wavePeriod)} unit={'seconds'}/>
    </div>
  );
}

export default Waves;
