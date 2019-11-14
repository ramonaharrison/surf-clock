import React from 'react';
import Value from './Value.js'

const Daylength = props => {
  const time = new Date(props.suntime).toLocaleTimeString('en-US', { timeStyle: 'short' })
  return (
    <div>
      <Value label={props.label} value={time}/>
    </div>
  );
}

export default Daylength;
