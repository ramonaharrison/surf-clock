import React from 'react';
import Value from './Value.js'

const Waves = props => {
  return (
    <div>
      <Value label={props.label} value={props.waves} unit={props.unit}/>
    </div>
  );
}

export default Waves;
