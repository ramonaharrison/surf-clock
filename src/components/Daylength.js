import React from 'react';

const Daylength = props => {
  const sunrise = new Date(props.sunrise).toLocaleTimeString('en-US', { timeStyle: 'short' })
  const sunset = new Date(props.sunset).toLocaleTimeString('en-US', { timeStyle: 'short' })
  return (
    <div className="daylength">
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  );
}

export default Daylength;
