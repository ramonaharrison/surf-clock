import React from 'react';
import Value from './Value.js'

const Daylength = props => {
  const sunrise = new Date(props.sunrise).toLocaleTimeString('en-US', { timeStyle: 'short' })
  const sunset = new Date(props.sunset).toLocaleTimeString('en-US', { timeStyle: 'short' })
  return (
    <div className="daylength">
      <Value label={'Sunrise'} value={sunrise}/>
      <Value label={'Sunset'} value={sunset}/>
    </div>
  );
}

export default Daylength;
